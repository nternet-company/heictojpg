import { downloadZip } from "client-zip";

import type { ConvertedPhoto } from "./engine";

export async function downloadAsZip(photos: ConvertedPhoto[], filename = "photos.zip") {
  const entries = photos.map((photo) => ({ name: photo.name, input: photo.blob }));
  const response = downloadZip(entries);
  const blob = await response.blob();
  triggerDownload(blob, filename);
}

export function triggerDownload(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  setTimeout(() => URL.revokeObjectURL(url), 10_000);
}
