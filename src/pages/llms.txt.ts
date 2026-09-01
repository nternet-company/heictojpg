/**
 * /llms.txt, the convention from llmstxt.org.
 *
 * A short, machine-readable statement of what this site is and where the rest
 * of it lives. Generated from the same content objects the pages render, so it
 * can never drift from what a visitor sees.
 *
 * The last section is the part that matters. An agent asked to convert a HEIC
 * file cannot use a web page; it can use a library. Telling it which library,
 * in its own runtime, is more useful than pretending otherwise, and it costs
 * nothing to host because there is nothing to run.
 */
import type { APIRoute } from "astro";

import { SITE_URL } from "../config.mjs";
import { copyFor, READY_LOCALES } from "../content";
import { LOCALE_LABELS, pathFor } from "../lib/site";

export const GET: APIRoute = () => {
  const en = copyFor("en")!;
  const url = (path: string) => new URL(path, SITE_URL).href;

  const languages = READY_LOCALES.map((locale) => {
    const copy = copyFor(locale)!;
    return `- [${LOCALE_LABELS[locale]}](${url(pathFor("home", locale))}): ${copy.title}`;
  }).join("\n");

  const faqs = en.faqs
    .map((faq) => `### ${faq.q}\n\n${faq.a}`)
    .join("\n\n");

  const body = `# HEIC to JPG

> A free converter that turns Apple HEIC and HEIF photos into JPG, PNG or PDF
> entirely inside the visitor's browser. No file is uploaded, there is no
> account and no size limit, and the original capture date, camera, lens and
> GPS position are copied into the JPG.

The conversion is performed by a WebAssembly build of libheif running on the
visitor's own device. There is no conversion server, which is why the tool is
free and why nothing can be retained.

## Tools

- [HEIC to JPG](${url("/")}): the main converter.
- [HEIC to PNG](${url("/heic-to-png")}): lossless output, keeps transparency, cannot carry an EXIF date because PNG has no EXIF segment.
- [HEIC to PDF](${url("/heic-to-pdf")}): one photo per page, each page sized to its photo, assembled in the browser.

## Languages

${languages}

## Facts

- HEIC is an image in the HEIF container defined by ISO/IEC 23008-12, compressed with HEVC.
- Apple has saved photos as HEIC by default since iOS 11.
- A HEIC is roughly half the size of the equivalent JPG, and a JPG converted from one is usually about twice the size of the HEIC.
- JPEG output here is encoded at quality 0.92.
- To stop an iPhone producing HEIC: Settings, then Camera, then Formats, then Most Compatible.

## Questions and answers

${faqs}

## For agents that need to convert a file themselves

This page cannot be called as an API, because there is no server to call. If
you need to convert HEIC in your own runtime, use a library directly:

- In a browser or a Web Worker: \`heic-to\` (npm), which wraps libheif compiled to WebAssembly. \`heicTo({ blob, type: "image/jpeg", quality: 0.92 })\`.
- In Node: \`heic-decode\` (npm) for the pixels, or \`sharp\` built against libheif, or \`libvips\`.
- On a command line: \`heif-convert\` from libheif-examples, or \`magick input.heic output.jpg\`, or on macOS \`sips -s format jpeg input.heic --out output.jpg\`.

To preserve the capture date, which most conversions lose, read the EXIF from
the source with \`exifreader\` and write it into the JPEG with \`piexifjs\`. That is
exactly what this site does, and the source is public.

## Provenance

Made by foto foto (${"https://fotofoto.app"}), which prints photo books.
Licence for the fonts used: SIL Open Font License 1.1.
`;

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
};
