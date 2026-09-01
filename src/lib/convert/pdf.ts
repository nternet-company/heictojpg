import type { ConvertedPhoto } from "./engine";
import { triggerDownload } from "./zip";

const PX_TO_PT = 72 / 96;

export async function downloadAsPdf(
  photos: ConvertedPhoto[],
  filename = "photos.pdf",
) {
  const { PDFDocument } = await import("pdf-lib");
  const doc = await PDFDocument.create();
  doc.setTitle(filename.replace(/\.pdf$/, ""));
  doc.setCreator("heictojpg.photo");
  doc.setProducer("heictojpg.photo");

  for (const photo of photos) {
    const bytes = new Uint8Array(await photo.blob.arrayBuffer());
    const image = await doc.embedJpg(bytes);
    const width = photo.width * PX_TO_PT;
    const height = photo.height * PX_TO_PT;
    const page = doc.addPage([width, height]);
    page.drawImage(image, { x: 0, y: 0, width, height });
  }

  const saved = await doc.save();
  const blob = new Blob([saved.slice()], { type: "application/pdf" });
  triggerDownload(blob, filename);
}
