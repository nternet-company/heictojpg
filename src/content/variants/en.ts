import type { VariantCopy, VariantId } from "../variant-types";

export const en: Record<VariantId, VariantCopy> = {
  png: {
    title: "HEIC to PNG. Free, and nothing is uploaded.",
    description:
      "Convert iPhone HEIC photos to PNG in your browser. Nothing is uploaded, there is no account and no file limit, and transparency is kept.",
    h1: "HEIC to PNG",
    lede:
      "PNG is the format to ask for when you need every pixel exactly as it was, or when the image has to sit on a transparent background. The conversion runs inside this browser tab, so the photos never leave your computer.",
    converterOverrides: {
      drop: "Drop your HEIC photos here",
      done: "{count} PNGs ready",
      downloadAll: "Download all as ZIP",
    },
    whyHeading: "When PNG is the right answer",
    why: [
      "PNG stores the image without throwing anything away, so it survives being edited and saved again and again without softening. JPG loses a little every time.",
      "PNG also keeps transparency, which a JPG cannot hold at all. If the photo has a cut-out background, PNG is the only one of the two that will keep it.",
      "The cost is size. A photograph saved as PNG is usually several times larger than the same photograph as a JPG, which is why JPG remains the sensible default for holiday photos and PNG is for logos, screenshots and anything with a hard edge.",
    ],
    faqHeading: "Common questions",
    faqs: [
      {
        q: "Is PNG better quality than JPG?",
        a: "For a photograph, the difference is invisible and the PNG is several times larger. PNG wins when an image has flat colour, sharp edges or transparency, or when it will be edited and re-saved repeatedly.",
      },
      {
        q: "Does the PNG keep the date the photo was taken?",
        a: "No, and no converter can do this properly. PNG has no EXIF segment the way JPG does, so the capture date has nowhere to live. If you need the date preserved, convert to JPG instead.",
      },
      {
        q: "Does it keep transparency?",
        a: "Yes. If the HEIC holds an alpha channel, the PNG keeps it.",
      },
      {
        q: "Are my photos uploaded?",
        a: "No. The decoding and re-encoding both happen in your browser, which you can confirm in the network tab of your developer tools.",
      },
    ],
    backHeading: "Wanted a different format?",
    backLabel: "HEIC to JPG",
    otherLabel: "HEIC to PDF",
  },

  pdf: {
    title: "HEIC to PDF. Free, and nothing is uploaded.",
    description:
      "Turn iPhone HEIC photos into a single PDF in your browser. Nothing is uploaded, there is no account, and the pages come out in the order you chose them.",
    h1: "HEIC to PDF",
    lede:
      "One photo to a page, in the order you picked them, as one PDF you can email or print. The whole document is assembled inside this browser tab, so the photos never leave your computer.",
    converterOverrides: {
      drop: "Drop your HEIC photos here",
      done: "{count} pages ready",
      downloadAll: "Download the PDF",
    },
    whyHeading: "What you get",
    why: [
      "Every photo becomes one page, sized to the photo rather than forced onto A4, so nothing is cropped and nothing floats in a sea of white.",
      "The pages keep the order the files were in, which for photos straight off a phone means the order they were taken.",
      "The images inside the PDF are JPEGs at quality 92, which is why the file stays small enough to email.",
    ],
    faqHeading: "Common questions",
    faqs: [
      {
        q: "Do I get one PDF or one per photo?",
        a: "One PDF containing all of them, one photo per page, in the order you selected.",
      },
      {
        q: "What page size does it use?",
        a: "Each page is exactly the size of its photo, so a portrait photo makes a portrait page and nothing is cropped. Printers will scale it to the paper you use.",
      },
      {
        q: "Is there a limit on how many photos?",
        a: "Only what your computer can hold. There is no server limit because there is no server. Very large sets take longer because your own machine is doing the work.",
      },
      {
        q: "Are my photos uploaded?",
        a: "No. The photos are decoded and the PDF is assembled in your browser, which you can confirm in the network tab of your developer tools.",
      },
    ],
    backHeading: "Wanted a different format?",
    backLabel: "HEIC to JPG",
    otherLabel: "HEIC to PNG",
  },
};
