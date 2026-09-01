import { applyTags, photoScore, readSourceTags, type SourceTags } from "./exif";
import type { DecodeFailure, DecodeSuccess } from "./decode-worker";

export interface ConvertedPhoto {
  id: string;
  name: string;
  blob: Blob;
  url: string;
  width: number;
  height: number;
  originalBytes: number;
  outputBytes: number;
  capturedAt: string | null;
  tags: SourceTags;
  score: number;
  index: number;
  previewUrl: string;
  previewWidth: number;
  previewHeight: number;
}

export interface ConversionFailure {
  id: string;
  name: string;
  reason: string;
}

export type OutputFormat = "jpg" | "png";

export interface EngineOptions {
  format?: OutputFormat;
  quality?: number;
  maxEdge?: number | null;
  onProgress?: (done: number, total: number) => void;
  onPhoto?: (photo: ConvertedPhoto) => void;
  onFailure?: (failure: ConversionFailure) => void;
  signal?: AbortSignal;
}

const HEIC_EXTENSIONS = /\.(heic|heif|hif)$/i;

const WORKER_TIMEOUT_MS = 45_000;

export function looksLikeHeic(file: File): boolean {
  return (
    HEIC_EXTENSIONS.test(file.name) ||
    file.type === "image/heic" ||
    file.type === "image/heif" ||
    file.type === "image/heic-sequence" ||
    file.type === "image/heif-sequence"
  );
}

export async function isHeicBytes(file: File): Promise<boolean> {
  try {
    const header = new Uint8Array(await file.slice(0, 12).arrayBuffer());
    const brand = new TextDecoder().decode(header.subarray(8, 12)).replace("\0", " ").trim();
    return ["mif1", "msf1", "heic", "heix", "hevc", "hevx", "heim", "heis", "avic"].includes(brand);
  } catch {
    return false;
  }
}

export function outputName(name: string, format: OutputFormat): string {
  return name.replace(HEIC_EXTENSIONS, "") + "." + format;
}

type OutputMime = "image/jpeg" | "image/png";

const MIME: Record<OutputFormat, OutputMime> = {
  jpg: "image/jpeg",
  png: "image/png",
};

function workerCount(): number {
  const cores = typeof navigator !== "undefined" ? navigator.hardwareConcurrency || 4 : 4;
  return Math.max(1, Math.min(4, cores - 1));
}

export function canUseWorkers(): boolean {
  return typeof Worker !== "undefined" && typeof OffscreenCanvas !== "undefined";
}

async function convertOnMainThread(
  buffer: ArrayBuffer,
  quality: number,
  mime: OutputMime,
): Promise<{ blob: Blob; width: number; height: number }> {
  const { heicTo } = await import("heic-to");
  const blob = await heicTo({ blob: new Blob([buffer]), type: mime, quality });
  const bitmap = await createImageBitmap(blob);
  const size = { width: bitmap.width, height: bitmap.height };
  bitmap.close();
  return { blob, ...size };
}

export async function convertFiles(files: File[], options: EngineOptions = {}) {
  const format = options.format ?? "jpg";
  const mime = MIME[format];
  const quality = options.quality ?? 0.92;
  const maxEdge = options.maxEdge ?? null;
  const total = files.length;
  let done = 0;

  const useWorkers = canUseWorkers();
  const pool = useWorkers
    ? Array.from({ length: Math.min(workerCount(), total) }, () =>
        new Worker(new URL("./decode-worker.ts", import.meta.url), { type: "module" }),
      )
    : [];

  const converted: ConvertedPhoto[] = [];
  const failures: ConversionFailure[] = [];
  let cursor = 0;

  async function runOne(worker: Worker | null, file: File, id: string, index: number) {
    const buffer = await file.arrayBuffer();

    let blob: Blob;
    let width: number;
    let height: number;
    let tags: SourceTags = {};
    let score = 0;
    let preview: { url: string; width: number; height: number } | null = null;

    let decoded: { blob: Blob; width: number; height: number } | null = null;
    let taggedInWorker = false;

    if (worker) {
      try {
        const result = await new Promise<DecodeSuccess | DecodeFailure>(
          (resolve, reject) => {
            const timer = setTimeout(
              () => reject(new Error("worker-timeout")),
              WORKER_TIMEOUT_MS,
            );
            const settle = (value: DecodeSuccess | DecodeFailure) => {
              clearTimeout(timer);
              resolve(value);
            };
            worker.onmessage = (
              event: MessageEvent<DecodeSuccess | DecodeFailure>,
            ) => settle(event.data);
            worker.onerror = (event) => {
              clearTimeout(timer);
              reject(new Error(event.message || "worker-error"));
            };
            worker.onmessageerror = () => {
              clearTimeout(timer);
              reject(new Error("worker-message-error"));
            };
            worker.postMessage({ id, buffer, quality, maxEdge, type: mime }, [
              buffer,
            ]);
          },
        );
        if (!result.ok) throw new Error(result.error);
        decoded = {
          blob: new Blob([result.buffer], { type: mime }),
          width: result.width,
          height: result.height,
        };
        tags = result.tags;
        score = result.score;
        taggedInWorker = true;
        if (result.preview.byteLength > 0) {
          preview = {
            url: URL.createObjectURL(new Blob([result.preview], { type: "image/jpeg" })),
            width: result.previewWidth,
            height: result.previewHeight,
          };
        }
      } catch {
        const bytes = await file.arrayBuffer();
        tags = await readSourceTags(bytes.slice(0));
        decoded = await convertOnMainThread(bytes, quality, mime);
        score = photoScore(tags, decoded.width, decoded.height);
      }
    } else {
      tags = await readSourceTags(buffer.slice(0));
      decoded = await convertOnMainThread(buffer, quality, mime);
      score = photoScore(tags, decoded.width, decoded.height);
    }

    if (!decoded) throw new Error("decode-produced-no-image");

    blob = decoded.blob;
    width = decoded.width;
    height = decoded.height;

    const tagged = format === "jpg" && !taggedInWorker ? await applyTags(blob, tags) : blob;
    const photo: ConvertedPhoto = {
      id,
      name: outputName(file.name, format),
      blob: tagged,
      url: URL.createObjectURL(tagged),
      width,
      height,
      originalBytes: file.size,
      outputBytes: tagged.size,
      capturedAt: tags.dateTimeOriginal ?? null,
      tags,
      score,
      index,
      previewUrl: preview?.url ?? "",
      previewWidth: preview?.width ?? width,
      previewHeight: preview?.height ?? height,
    };
    if (!photo.previewUrl) photo.previewUrl = photo.url;
    converted.push(photo);
    options.onPhoto?.(photo);
  }

  async function drain(worker: Worker | null) {
    while (cursor < files.length) {
      if (options.signal?.aborted) return;
      const index = cursor;
      cursor += 1;
      const file = files[index];
      const id = `${index}-${file.name}`;
      try {
        await runOne(worker, file, id, index);
      } catch (error) {
        const failure: ConversionFailure = {
          id,
          name: file.name,
          reason: error instanceof Error ? error.message : String(error),
        };
        failures.push(failure);
        options.onFailure?.(failure);
      } finally {
        done += 1;
        options.onProgress?.(done, total);
      }
    }
  }

  try {
    await Promise.all(useWorkers ? pool.map((worker) => drain(worker)) : [drain(null)]);
  } finally {
    pool.forEach((worker) => worker.terminate());
  }

  converted.sort((a, b) => a.index - b.index);
  return { converted, failures };
}
