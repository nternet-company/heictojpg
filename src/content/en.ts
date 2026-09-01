import type { HomeCopy } from "./types";

export const en: HomeCopy = {
  title: "HEIC to JPG. Free, and nothing is uploaded.",
  description:
    "Convert HEIC to JPG in your browser, straight from your iPhone photos. Nothing is uploaded, the original capture date is kept, and there is no account or file limit.",
  h1: "HEIC to JPG",
  lede:
    "Your iPhone saves photos as HEIC, and half the software in the world will not open them. Drop them here to convert HEIC to JPG. Some tools spell it HEIC to JPEG; same format, same result. The conversion runs inside this browser tab, so the photos never leave your computer.",

  tagline: "HEIC in, JPG out.",

  stage: {

    idle: "Add photos",
    idleHint: "HEIC in, JPG out. Nothing leaves your browser.",
    converting: "{done} of {total} printed",
    failed: "Nothing came out",
    wrongFiles: "Those are not HEIC files",

    countOne: "One photo, printed",
    countMany: "{count} photos, printed",
    save: "Download {count} JPGs as ZIP",
    saveOne: "Download the JPG",
    again: "Start over",

    bookTitle: "A free tool by ",
    bookBody: "Want to support us? Get yourself a beautiful photo book.",
  },

  footerLine: "Also converts to {png} and {pdf}. {read} how it works, and why nothing leaves your computer.",
  readLabel: "Read",
  aboutHeading: "About this tool",
  backLabel: "Back to the converter",

  howHeading: "How to convert HEIC to JPG",
  steps: [
    {
      name: "Choose your photos",
      text: "Drop the HEIC files anywhere on the page, or click the page and pick them.",
    },
    {
      name: "One or many",
      text: "One photo or several hundred, there is no limit.",
    },
    {
      name: "Watch the wall fill up",
      text: "Each photo converts inside your browser and fades into the gallery the moment its JPEG exists, while a progress bar counts to one hundred.",
    },
    {
      name: "Download",
      text: "Click a single photo to save it, or take the whole set as one ZIP file.",
    },
  ],

  sections: [
    {
      id: "why",
      heading: "Why your photos are HEIC in the first place",
      body: [
        "Since iOS 11 an iPhone saves photos as HEIC instead of JPG. The format stores the same picture in roughly half the space, which is why Apple switched to it and why your phone fits more photos than it used to.",
        "The trouble starts when the photo leaves the phone. Older Windows versions, plenty of web forms, print shops, and a long tail of ordinary software still expect a JPG and simply refuse the file. Converting is not about quality, it is about the rest of the world catching up.",
      ],
    },
    {
      id: "local",
      heading: "Nothing here is uploaded",
      body: [
        "Every other converter on the first page of Google sends your photos to a server, converts them there, and sends them back. That is a reasonable way to build a website and a strange way to treat someone's holiday.",
        "This page decodes HEIC in your browser using a WebAssembly build of libheif. Open your browser's network tab, convert a photo, and you will see no request carrying it anywhere. There is nothing to delete afterwards because there was never a copy.",
      ],
    },
    {
      id: "date",
      heading: "Your photos keep their date",
      body: [
        "Most converters hand back a JPG stamped with the moment you converted it. Drop a folder of them into any photo app and a two week trip collapses into a single afternoon.",
        "This one reads the capture date, the camera, the lens and the location out of the original file and writes them into the JPG. The photos sort the way they were taken.",
      ],
    },
  ],

  specHeading: "HEIC and JPG, side by side",
  specIntro:
    "Both hold one photograph. Almost everything else about them is different, which is why one of them keeps getting refused.",
  specColumns: { label: "", heic: "HEIC", jpg: "JPG" },
  specRows: [
    { label: "Full name", heic: "High Efficiency Image Container", jpg: "JPEG File Interchange Format" },
    { label: "Standard", heic: "ISO/IEC 23008-12 (HEIF)", jpg: "ISO/IEC 10918" },
    { label: "Compression", heic: "HEVC (H.265)", jpg: "Discrete cosine transform" },
    { label: "MIME type", heic: "image/heic", jpg: "image/jpeg" },
    { label: "File extension", heic: ".heic, .heif", jpg: ".jpg, .jpeg" },
    { label: "Apple UTI", heic: "public.heic", jpg: "public.jpeg" },
    { label: "Colour depth", heic: "Up to 16 bit", jpg: "8 bit" },
    { label: "Typical size", heic: "About half a JPG", jpg: "The baseline everyone compares to" },
    { label: "Transparency", heic: "Yes", jpg: "No" },
    { label: "Several images in one file", heic: "Yes, including Live Photos and bursts", jpg: "No" },
    { label: "Depth and edit data", heic: "Yes", jpg: "No" },
    { label: "Opens everywhere", heic: "No", jpg: "Yes, for about thirty years" },
    { label: "Released", heic: "2015, adopted by Apple in 2017", jpg: "1992" },
  ],

  platformsHeading: "If you would rather not use a website",
  platformsIntro:
    "Every operating system can do this on its own. It is slower and it forgets the batch, but it works offline and it is worth knowing.",
  platforms: [
    {
      id: "iphone",
      name: "On an iPhone or iPad",
      intro: "The phone will hand over JPGs if you ask it to, and it can stop making HEIC files altogether.",
      steps: [
        "To convert one photo: open it in Photos, tap the share button, choose Copy Photo, then paste it into Files or Mail. It arrives as a JPG.",
        "To stop new photos being HEIC: open Settings, then Camera, then Formats, and choose Most Compatible.",
        "To send JPGs to a computer: open Settings, then Photos, scroll to Transfer to Mac or PC, and choose Automatic.",
      ],
    },
    {
      id: "windows",
      name: "On Windows",
      intro: "Windows 11 opens HEIC out of the box. Windows 10 usually needs a codec from the Microsoft Store first.",
      steps: [
        "Install the free HEIF Image Extensions from the Microsoft Store if the file will not open.",
        "Right click the photo, choose Open with, then Photos.",
        "Click the three dots, choose Save as, and pick JPG as the file type.",
        "Windows has no batch conversion built in, so for a folder of photos use the converter at the top of this page.",
      ],
    },
    {
      id: "mac",
      name: "On a Mac",
      intro: "Preview converts one photo or a whole folder without installing anything.",
      steps: [
        "Select the photos in Finder, right click, and choose Quick Actions, then Convert Image.",
        "Choose JPEG, pick a size, and click Convert to JPEG.",
        "Or open a photo in Preview and use File, then Export, and set the format to JPEG.",
      ],
    },
    {
      id: "android",
      name: "On Android",
      intro: "Android reads HEIC on most recent phones but does not convert it for you.",
      steps: [
        "Open this page in Chrome, tap Choose photos, and pick the files.",
        "The conversion runs on the phone itself, so it works on mobile data or with no signal at all.",
        "The JPGs save to your Downloads folder.",
      ],
    },
  ],

  faqHeading: "Common questions",
  faqs: [
    {
      q: "What is a HEIC file?",
      a: "HEIC is Apple's name for a photo stored in the HEIF container defined by ISO/IEC 23008-12, compressed with HEVC. It holds the same image as a JPG in roughly half the file size, and it can also hold things a JPG cannot, such as transparency, depth data, 16 bit colour and the several frames of a Live Photo.",
    },
    {
      q: "How do I open a HEIC file?",
      a: "On a Mac or an iPhone, double tap it and it opens. On Windows 11 it opens in Photos. On Windows 10 install the free HEIF Image Extensions from the Microsoft Store. If none of that is available, convert it to JPG at the top of this page and open that instead.",
    },
    {
      q: "Is it really free?",
      a: "Yes. There is no account, no watermark, no limit on how many photos you convert, and no paid tier. It is made by foto foto, a photo book company, and the only thing it asks is that you look at a photo book at the end.",
    },
    {
      q: "Do my photos get uploaded?",
      a: "No. The conversion runs in your browser using a WebAssembly build of libheif. Your photos are never sent anywhere, which you can confirm yourself in the network tab of your browser's developer tools.",
    },
    {
      q: "Does converting lose quality?",
      a: "A little, in the same way any JPG does. We encode at quality 92, which is visually indistinguishable from the original for photographs. The HEIC file on your computer is untouched, so you always keep the original.",
    },
    {
      q: "How many photos can I convert at once?",
      a: "As many as your computer can hold. There is no server limit because there is no server. Several hundred photos at a time is normal; the page converts several at once in the background so the tab stays responsive.",
    },
    {
      q: "Does it keep the date the photo was taken?",
      a: "Yes. The capture date, camera, lens and GPS location are copied from the HEIC into the JPG, so the photos still sort by when you took them.",
    },
    {
      q: "Does it work on an iPhone or iPad?",
      a: "Yes. Open this page in Safari, tap Choose photos, and pick them from your library. The converted files save to your Files app.",
    },
    {
      q: "Can I stop my iPhone making HEIC files?",
      a: "Yes. Open Settings, then Camera, then Formats, and choose Most Compatible. New photos are saved as JPG. Photos you already took stay HEIC, which is what this page is for.",
    },
    {
      q: "What happens to a Live Photo?",
      a: "A Live Photo is a HEIC holding several frames plus a short video. The converter takes the still frame, which is the photo you see in your library. The movement is not carried into a JPG because a JPG cannot hold it.",
    },
    {
      q: "Why is my converted JPG bigger than the HEIC?",
      a: "Because HEVC compresses better than JPEG. The same picture usually needs about twice the space as a JPG. That is the trade you are making for a file that opens everywhere.",
    },
    {
      q: "Can I convert HEIC to PNG or PDF instead?",
      a: "Yes. There is a HEIC to PNG converter and a HEIC to PDF converter on this site, both working the same way and both staying on your computer.",
    },
  ],

  siblingsHeading: "Other things you might need",
  siblings: [
    { label: "HEIC to PNG", page: "png" },
    { label: "HEIC to PDF", page: "pdf" },
  ],

  bookHeading: "Made by a photo book company",
  bookBody:
    "foto foto turns a folder of photos into a printed book without asking you to lay anything out. This converter exists because the photos always arrive as HEIC first.",
  bookCta: "See what foto foto makes",

  footerNote:
    "The conversion happens in your browser. No photo you open here is uploaded, stored or seen by anyone.",
};
