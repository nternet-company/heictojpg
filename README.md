# heictojpg

Converts iPhone HEIC photos to JPG, PNG or PDF in the browser. Files never
leave the visitor's machine: decoding runs in a worker pool on their own CPU,
the EXIF block is carried over to the JPG, and the capture date stays what the
camera wrote.

Live at [heictojpg.photo](https://heictojpg.photo), in seven languages.

## How it works

- HEIC decoding is libheif compiled to WebAssembly, via `heic-to`, running in
  up to four web workers with a main-thread fallback for browsers without
  OffscreenCanvas.
- EXIF is read with ExifReader and written back with piexifjs. Most converters
  stamp the output with the conversion time; this one keeps DateTimeOriginal,
  GPS and the rest.
- Batches stream into a ZIP with `client-zip`. The PDF page puts one photo per
  page with `pdf-lib`.
- The gallery uses justified rows adapted from `flickr/justified-layout`.
- The background is animated pixel art that follows the visitor's clock:
  morning, day, dusk and night scenes, from CC0 packs by ansimuz and
  MatiasVME.
- Astro static build, 24 pages across 7 locales with translated slugs,
  served from Cloudflare Workers static assets. No server code, no database,
  no analytics.

## Develop

```
bun install
bunx astro dev
bun run build
```

Test photos go in `fixtures-heic/` (gitignored, because test photos are
someone's photos). The dev server exposes that folder at `/_fixtures`; it is
never copied into a build.

## Licences

This repository is MIT. The pixel scenes are CC0, with the artists' notes in
`public/img/scene`. The fonts are under the SIL Open Font License, with their
licence files in `public/fonts`. Vendored pieces keep their own notices:
`dither-plugin` (MIT), Magic UI's progress gauge (MIT), `flag-icons` (MIT).

Made by [foto foto](https://fotofoto.app), a photo book company in the
Netherlands. This converter exists because every folder of photos we are
handed starts as HEIC.
