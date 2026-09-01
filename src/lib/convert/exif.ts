import piexif from "piexifjs";

import { PHOTO_SCORE_PASS } from "./photo-gate";

const IFD0 = { Make: 271, Model: 272, Orientation: 274, Software: 305, DateTime: 306 };
const EXIF = {
  DateTimeOriginal: 36867,
  DateTimeDigitized: 36868,
  ExposureTime: 33434,
  FNumber: 33437,
  ISOSpeedRatings: 34855,
  FocalLength: 37386,
  SubjectArea: 37396,
  LensModel: 42036,
};
const GPS = {
  GPSLatitudeRef: 1, GPSLatitude: 2,
  GPSLongitudeRef: 3, GPSLongitude: 4,
  GPSAltitudeRef: 5, GPSAltitude: 6,
};

export interface SourceTags {
  dateTimeOriginal?: string;
  make?: string;
  model?: string;
  lensModel?: string;
  exposureTime?: number;
  exposureLabel?: string;
  fNumber?: number;
  iso?: number;
  focalLength?: number;
  subjectArea?: number[];
  pixelWidth?: number;
  pixelHeight?: number;
  latitude?: number;
  longitude?: number;
  altitude?: number;
}

type Reader = typeof import("exifreader");
let readerPromise: Promise<Reader> | null = null;

function loadReader(): Promise<Reader> {
  if (!readerPromise) readerPromise = import("exifreader").then((m) => m.default ?? m);
  return readerPromise;
}

const NO_XMP = {
  parseFromString(): never {
    throw new Error("xmp-not-read");
  },
} as unknown as DOMParser;

interface Tag {
  value?: unknown;
  description?: unknown;
}

function text(tag: Tag | undefined): string | undefined {
  if (!tag) return undefined;
  const raw = Array.isArray(tag.value) ? tag.value[0] : tag.value;
  const out = typeof raw === "string" ? raw : typeof tag.description === "string" ? tag.description : undefined;
  const trimmed = out?.trim();
  return trimmed ? trimmed : undefined;
}

function num(tag: Tag | undefined): number | undefined {
  if (!tag) return undefined;
  const v = tag.value;
  if (typeof v === "number" && Number.isFinite(v)) return v;
  if (Array.isArray(v) && v.length === 2 && typeof v[0] === "number" && typeof v[1] === "number") {
    if (v[1] === 0) return undefined;
    const out = v[0] / v[1];
    return Number.isFinite(out) ? out : undefined;
  }
  if (typeof tag.description === "number") return tag.description;
  return undefined;
}

export async function readSourceTags(source: Blob | ArrayBuffer): Promise<SourceTags> {
  try {
    const ExifReader = await loadReader();
    const buffer = source instanceof ArrayBuffer ? source : await source.arrayBuffer();
    const parsed = ExifReader.load(buffer, { expanded: true, domParser: NO_XMP }) as {
      exif?: Record<string, Tag>;
      gps?: { Latitude?: number; Longitude?: number; Altitude?: number };
    };
    const exif = parsed.exif ?? {};
    const gps = parsed.gps ?? {};

    const subject = exif.SubjectArea?.value;

    return {
      dateTimeOriginal:
        text(exif.DateTimeOriginal) ?? text(exif.DateTimeDigitized) ?? text(exif.DateTime),
      make: text(exif.Make),
      model: text(exif.Model),
      lensModel: text(exif.LensModel),
      exposureTime: num(exif.ExposureTime),
      exposureLabel:
        typeof exif.ExposureTime?.description === "string" ? exif.ExposureTime.description : undefined,
      fNumber: num(exif.FNumber),
      iso: num(exif.ISOSpeedRatings),
      focalLength: num(exif.FocalLength),
      subjectArea: Array.isArray(subject) && subject.every((n) => typeof n === "number")
        ? (subject as number[])
        : undefined,
      pixelWidth: num(exif.PixelXDimension),
      pixelHeight: num(exif.PixelYDimension),
      latitude: typeof gps.Latitude === "number" ? gps.Latitude : undefined,
      longitude: typeof gps.Longitude === "number" ? gps.Longitude : undefined,
      altitude: typeof gps.Altitude === "number" ? gps.Altitude : undefined,
    };
  } catch {
    return {};
  }
}

export { PHOTO_SCORE_PASS };

export function photoScore(tags: SourceTags, width?: number, height?: number): number {
  const w = width ?? tags.pixelWidth ?? 0;
  const h = height ?? tags.pixelHeight ?? 0;

  if (w > 0 && h > 0) {
    const ratio = Math.max(w, h) / Math.min(w, h);
    if (ratio > 2.05) return 0;
  }
  if (!tags.dateTimeOriginal) return 0;

  let score = 0;
  if (typeof tags.exposureTime === "number") score += 2;
  if (typeof tags.fNumber === "number") score += 2;
  if (typeof tags.iso === "number") score += 1;
  if (typeof tags.focalLength === "number") score += 1;
  if (tags.lensModel) score += 1;
  if (tags.subjectArea) score += 1;
  if (typeof tags.latitude === "number" && typeof tags.longitude === "number") score += 1;
  if (Math.max(w, h) >= 1500) score += 1;
  return score;
}

export function isPhotograph(tags: SourceTags, width?: number, height?: number): boolean {
  return photoScore(tags, width, height) >= PHOTO_SCORE_PASS;
}

function rational(n: number | undefined, precision = 1000): [number, number] | undefined {
  if (typeof n !== "number" || !Number.isFinite(n) || n <= 0) return undefined;
  return [Math.round(n * precision), precision];
}

function degreesToDms(value: number): [[number, number], [number, number], [number, number]] {
  const abs = Math.abs(value);
  const deg = Math.floor(abs);
  const minFloat = (abs - deg) * 60;
  const min = Math.floor(minFloat);
  const sec = Math.round((minFloat - min) * 60 * 1000);
  return [[deg, 1], [min, 1], [sec, 1000]];
}

function binaryString(bytes: Uint8Array): string {
  let out = "";
  const CHUNK = 0x8000;
  for (let i = 0; i < bytes.length; i += CHUNK) {
    out += String.fromCharCode(...bytes.subarray(i, i + CHUNK));
  }
  return out;
}

function bytesFromBinaryString(str: string): Uint8Array {
  const out = new Uint8Array(str.length);
  for (let i = 0; i < str.length; i += 1) out[i] = str.charCodeAt(i) & 0xff;
  return out;
}

export function applyTagsToBytes(bytes: Uint8Array, tags: SourceTags): Uint8Array {
  const zeroth: Record<number, unknown> = {};
  const exif: Record<number, unknown> = {};
  const gps: Record<number, unknown> = {};

  if (tags.make) zeroth[IFD0.Make] = tags.make;
  if (tags.model) zeroth[IFD0.Model] = tags.model;
  if (tags.dateTimeOriginal) {
    zeroth[IFD0.DateTime] = tags.dateTimeOriginal;
    exif[EXIF.DateTimeOriginal] = tags.dateTimeOriginal;
    exif[EXIF.DateTimeDigitized] = tags.dateTimeOriginal;
  }
  zeroth[IFD0.Orientation] = 1;

  const exposure = rational(tags.exposureTime, 100000);
  if (exposure) exif[EXIF.ExposureTime] = exposure;
  const aperture = rational(tags.fNumber, 100);
  if (aperture) exif[EXIF.FNumber] = aperture;
  const focal = rational(tags.focalLength, 100);
  if (focal) exif[EXIF.FocalLength] = focal;
  if (typeof tags.iso === "number") exif[EXIF.ISOSpeedRatings] = Math.round(tags.iso);
  if (tags.lensModel) exif[EXIF.LensModel] = tags.lensModel;
  if (tags.subjectArea && tags.subjectArea.length >= 2) {
    exif[EXIF.SubjectArea] = tags.subjectArea.map((n) => Math.round(n));
  }

  if (typeof tags.latitude === "number" && typeof tags.longitude === "number") {
    gps[GPS.GPSLatitudeRef] = tags.latitude >= 0 ? "N" : "S";
    gps[GPS.GPSLatitude] = degreesToDms(tags.latitude);
    gps[GPS.GPSLongitudeRef] = tags.longitude >= 0 ? "E" : "W";
    gps[GPS.GPSLongitude] = degreesToDms(tags.longitude);
    if (typeof tags.altitude === "number") {
      gps[GPS.GPSAltitudeRef] = tags.altitude >= 0 ? 0 : 1;
      const alt = rational(Math.abs(tags.altitude), 100);
      if (alt) gps[GPS.GPSAltitude] = alt;
    }
  }

  try {
    const dump = piexif.dump({ "0th": zeroth, Exif: exif, GPS: gps, "1st": {}, thumbnail: undefined });
    const withExif = piexif.insert(dump, binaryString(bytes));
    return bytesFromBinaryString(withExif);
  } catch {
    return bytes;
  }
}

export async function applyTags(jpeg: Blob, tags: SourceTags): Promise<Blob> {
  try {
    const bytes = new Uint8Array(await jpeg.arrayBuffer());
    const tagged = applyTagsToBytes(bytes, tags);
    return new Blob([tagged.buffer as ArrayBuffer], { type: "image/jpeg" });
  } catch {
    return jpeg;
  }
}
