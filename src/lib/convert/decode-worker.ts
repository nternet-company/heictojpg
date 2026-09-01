import { heicTo } from "heic-to";

import { applyTagsToBytes, photoScore, readSourceTags, type SourceTags } from "./exif";

const PREVIEW_EDGE = 320;

export interface DecodeRequest {
  id: string;
  buffer: ArrayBuffer;
  quality: number;
  maxEdge: number | null;
  type: string;
}

export interface DecodeSuccess {
  id: string;
  ok: true;
  buffer: ArrayBuffer;
  width: number;
  height: number;
  tags: SourceTags;
  score: number;
  preview: ArrayBuffer;
  previewWidth: number;
  previewHeight: number;
}

export interface DecodeFailure {
  id: string;
  ok: false;
  error: string;
}

async function encode(
  bitmap: ImageBitmap,
  quality: number,
  maxEdge: number | null,
  type: string,
) {
  let { width, height } = bitmap;
  if (maxEdge && Math.max(width, height) > maxEdge) {
    const scale = maxEdge / Math.max(width, height);
    width = Math.round(width * scale);
    height = Math.round(height * scale);
  }
  const canvas = new OffscreenCanvas(width, height);
  const ctx = canvas.getContext("2d", { alpha: type === "image/png" });
  if (!ctx) throw new Error("no-2d-context");
  ctx.drawImage(bitmap, 0, 0, width, height);
  const blob = await canvas.convertToBlob({ type, quality });

  const edge = Math.max(width, height);
  const scale = edge > PREVIEW_EDGE ? PREVIEW_EDGE / edge : 1;
  const pw = Math.max(1, Math.round(width * scale));
  const ph = Math.max(1, Math.round(height * scale));
  const small = new OffscreenCanvas(pw, ph);
  const sctx = small.getContext("2d", { alpha: false });
  let preview: ArrayBuffer;
  if (sctx) {
    sctx.drawImage(bitmap, 0, 0, pw, ph);
    preview = await (await small.convertToBlob({ type: "image/jpeg", quality: 0.72 })).arrayBuffer();
  } else {
    preview = new ArrayBuffer(0);
  }
  bitmap.close();

  return { buffer: await blob.arrayBuffer(), width, height, preview, previewWidth: pw, previewHeight: ph };
}

self.onmessage = async (event: MessageEvent<DecodeRequest>) => {
  const { id, buffer, quality, maxEdge, type } = event.data;
  try {
    const tags = await readSourceTags(buffer);
    const bitmap = await heicTo({ blob: new Blob([buffer]), type: "bitmap" });
    const mime = type || "image/jpeg";
    const encoded = await encode(bitmap, quality, maxEdge, mime);

    const out =
      mime === "image/jpeg"
        ? applyTagsToBytes(new Uint8Array(encoded.buffer), tags)
        : new Uint8Array(encoded.buffer);

    const message: DecodeSuccess = {
      id,
      ok: true,
      buffer: out.buffer as ArrayBuffer,
      width: encoded.width,
      height: encoded.height,
      tags,
      score: photoScore(tags, encoded.width, encoded.height),
      preview: encoded.preview,
      previewWidth: encoded.previewWidth,
      previewHeight: encoded.previewHeight,
    };
    (self as unknown as Worker).postMessage(message, [message.buffer, message.preview]);
  } catch (error) {
    const message: DecodeFailure = {
      id,
      ok: false,
      error: error instanceof Error ? error.message : String(error),
    };
    (self as unknown as Worker).postMessage(message);
  }
};
