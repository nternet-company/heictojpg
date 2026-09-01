import type { ConvertedPhoto } from "./convert/engine";
import { PHOTO_SCORE_PASS } from "./convert/photo-gate";
import type { PlateStrings } from "./convert/ui-types";
import { computeJustifiedLayout } from "./justified-layout";

const TILE_MAX = 160;

function interpolate(template: string, values: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, key: string) =>
    key in values ? String(values[key]) : `{${key}}`,
  );
}

function printableDate(value: string | null | undefined): string | null {
  if (!value) return null;
  const match = value.match(/^(\d{4}):(\d{2}):(\d{2}) (\d{2}):(\d{2}):(\d{2})/);
  if (!match) return null;
  return `${match[3]}.${match[2]}.${match[1]}  ${match[4]}:${match[5]}:${match[6]}`;
}

function printableCamera(photo: ConvertedPhoto): string {
  return [photo.tags.make, photo.tags.model].filter(Boolean).join(" ");
}

type State = "idle" | "over" | "reading" | "working" | "done" | "error";

export class DropElement extends HTMLElement {
  private strings!: PlateStrings;
  private format!: "jpg" | "png" | "pdf";
  private locale!: string;

  private panel!: HTMLElement;
  private fill!: HTMLElement;
  private counter!: HTMLElement;
  private gallery!: HTMLElement;
  private gwall!: HTMLElement;
  private take!: HTMLButtonElement;
  private cover!: HTMLImageElement;
  private oops!: HTMLElement;
  private statusEl!: HTMLElement;
  private input!: HTMLInputElement;

  private state: State = "idle";
  private photos: ConvertedPhoto[] = [];
  private urls: string[] = [];
  private total = 0;
  private landed = 0;
  private saving = false;
  private reduced = false;
  private ars: number[] = [];
  private tiles: HTMLElement[] = [];
  private relayoutTimer = 0;

  connectedCallback() {
    this.format = (this.getAttribute("format") as "jpg" | "png" | "pdf") ?? "jpg";
    this.locale = this.getAttribute("locale") ?? "en";
    this.strings = JSON.parse(this.getAttribute("strings") ?? "{}") as PlateStrings;
    this.removeAttribute("strings");
    this.reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    this.panel = this.querySelector("[data-panel]") as HTMLElement;
    this.fill = this.querySelector("[data-fill]") as HTMLElement;
    this.counter = this.querySelector("[data-counter]") as HTMLElement;
    this.gallery = this.querySelector("[data-gallery]") as HTMLElement;
    this.gwall = this.querySelector("[data-gwall]") as HTMLElement;
    this.take = this.querySelector("[data-take]") as HTMLButtonElement;
    this.cover = this.querySelector("[data-cover]") as HTMLImageElement;
    this.oops = this.querySelector("[data-oops]") as HTMLElement;
    this.statusEl = this.querySelector("[data-status]") as HTMLElement;
    this.input = this.querySelector("[data-input]") as HTMLInputElement;

    window.addEventListener("resize", () => {
      window.clearTimeout(this.relayoutTimer);
      this.relayoutTimer = window.setTimeout(() => this.relayout(), 150);
    });

    this.input.addEventListener("change", () => {
      const files = Array.from(this.input.files ?? []);
      this.input.value = "";
      if (files.length > 0) void this.start(files);
    });

    const pick = () => this.input.click();
    this.querySelector("[data-add]")?.addEventListener("click", (event) => {
      event.stopPropagation();
      pick();
    });
    this.panel.addEventListener("click", (event) => {
      const target = event.target as HTMLElement;
      if (target.closest("button, a")) return;
      if (this.state === "idle" || this.state === "error" || this.state === "over") pick();
    });
    this.take.addEventListener("click", () => void this.save());
    this.querySelector("[data-again]")?.addEventListener("click", () => this.reset());

    const stop = (event: DragEvent) => {
      event.preventDefault();
      event.stopPropagation();
    };
    document.addEventListener("dragover", (event) => {
      stop(event);
      if (this.state === "idle" || this.state === "error") this.setState("over");
    });
    document.addEventListener("dragleave", (event) => {
      stop(event);
      if (event.relatedTarget === null && this.state === "over") this.setState("idle");
    });
    document.addEventListener("drop", (event) => {
      stop(event);
      const files = Array.from(event.dataTransfer?.files ?? []);
      if (files.length > 0) void this.start(files);
      else if (this.state === "over") this.setState("idle");
    });

    window.addEventListener("beforeunload", () => this.release());
    this.setState("idle");
  }

  private setState(state: State) {
    this.state = state;
    this.dataset.state = state;
  }

  private release() {
    for (const url of this.urls) URL.revokeObjectURL(url);
    this.urls = [];
  }

  private reset() {
    this.release();
    this.photos = [];
    this.total = 0;
    this.landed = 0;
    this.gwall.replaceChildren();
    this.gwall.style.height = "0px";
    this.ars = [];
    this.tiles = [];
    this.fill.style.width = "0%";
    this.counter.replaceChildren();
    this.oops.hidden = true;
    this.oops.textContent = "";
    this.cover.removeAttribute("src");
    this.cover.style.removeProperty("object-position");
    this.statusEl.textContent = "";
    this.setState("idle");
  }

  private async start(files: File[]) {
    if (this.state === "reading" || this.state === "working") return;
    if (files.length === 0) return;

    this.reset();
    this.setState("reading");

    const engine = await import("./convert/engine");
    const checks = await Promise.all(
      files.map(async (file) =>
        engine.looksLikeHeic(file) ? file : (await engine.isHeicBytes(file)) ? file : null,
      ),
    );
    const valid = checks.filter((file): file is File => file !== null);

    if (valid.length === 0) {
      this.setState("error");
      this.oops.hidden = false;
      this.oops.textContent = this.strings.wrongFiles;
      this.statusEl.textContent = this.strings.wrongFiles;
      return;
    }

    this.total = valid.length;
    this.setState("working");
    this.paintProgress(0);
    window.setTimeout(() => this.relayout(), 700);

    const result = await engine.convertFiles(valid, {
      format: this.format === "pdf" ? "jpg" : this.format,
      onPhoto: (photo) => this.land(photo),
      onProgress: (done) => {
        this.paintProgress(done);
        this.statusEl.textContent = interpolate(this.strings.converting, {
          done,
          total: this.total,
        });
      },
    });

    this.photos = result.converted;
    if (this.photos.length === 0) {
      this.setState("error");
      this.oops.hidden = false;
      this.oops.textContent = this.strings.failed;
      this.statusEl.textContent = this.strings.failed;
      return;
    }
    this.finish();
  }

  private paintProgress(done: number) {
    const percent = this.total > 0 ? Math.round((done / this.total) * 100) : 0;
    this.fill.style.width = percent + "%";
    this.counter.replaceChildren();
    for (const ch of String(percent)) {
      const cell = document.createElement("span");
      cell.className = "digit";
      cell.textContent = ch;
      this.counter.append(cell);
    }
    const pct = document.createElement("span");
    pct.textContent = "%";
    this.counter.append(pct);
  }

  private land(photo: ConvertedPhoto) {
    if (photo.previewUrl) this.urls.push(photo.previewUrl);
    this.urls.push(photo.url);
    this.landed += 1;
    if (this.tiles.length >= TILE_MAX) return;

    const width = photo.previewWidth || photo.width || 3;
    const height = photo.previewHeight || photo.height || 2;
    this.ars.push(width / Math.max(1, height));

    const tile = document.createElement("button");
    tile.type = "button";
    tile.className = "tile";
    tile.innerHTML = '<img alt="" decoding="async" loading="lazy" />';
    (tile.querySelector("img") as HTMLImageElement).src = photo.previewUrl || photo.url;
    const date = printableDate(photo.capturedAt);
    tile.setAttribute(
      "aria-label",
      [photo.name, date ?? "", printableCamera(photo)].filter(Boolean).join(". "),
    );
    tile.addEventListener("click", () => {
      void import("./convert/zip").then(({ triggerDownload }) =>
        triggerDownload(photo.blob, photo.name),
      );
    });
    this.gwall.append(tile);
    this.tiles.push(tile);
    this.relayout();
    void tile.offsetWidth;
    tile.classList.add("is-on");
  }

  private relayout() {
    const width = this.gwall.clientWidth;
    if (width <= 0 || this.ars.length === 0) return;
    const count = this.ars.length;
    const target = count <= 2 ? 240 : count <= 12 ? 170 : 150;
    const layout = computeJustifiedLayout(this.ars, width, target, 4, {
      heightTolerance: 0.08,
      cropCap: 0.07,
    });
    for (let i = 0; i < this.tiles.length; i += 1) {
      const box = layout.boxes[i];
      if (!box) continue;
      const tile = this.tiles[i];
      tile.style.width = box.width.toFixed(2) + "px";
      tile.style.height = box.height.toFixed(2) + "px";
      tile.style.transform =
        "translate3d(" + box.left.toFixed(2) + "px, " + box.top.toFixed(2) + "px, 0)";
    }
    this.gwall.style.height = layout.containerHeight.toFixed(0) + "px";
  }

  private finish() {
    this.setState("done");
    this.take.textContent =
      this.photos.length === 1
        ? this.strings.saveOne
        : interpolate(this.strings.save, { count: this.photos.length });
    this.statusEl.textContent =
      this.photos.length === 1
        ? this.strings.countOne
        : interpolate(this.strings.countMany, { count: this.photos.length });
    this.offerBook();
  }

  private offerBook() {
    const qualifying = this.photos.filter((photo) => photo.score >= PHOTO_SCORE_PASS);
    if (qualifying.length < 1) return;
    const TARGET_AR = 0.8;
    const fit = (photo: ConvertedPhoto) => {
      const ar = (photo.previewWidth || photo.width) / Math.max(1, photo.previewHeight || photo.height);
      return Math.abs(Math.log(ar / TARGET_AR));
    };
    const best = qualifying.reduce((a, b) =>
      fit(b) < fit(a) || (fit(b) === fit(a) && b.score > a.score) ? b : a,
    );
    this.cover.src = best.previewUrl || best.url;

    const ar = (best.previewWidth || best.width) / Math.max(1, best.previewHeight || best.height);
    const coverAr = 2550 / 3300;
    let w = 64;
    let h = (w * coverAr) / ar;
    if (h > 52) {
      h = 52;
      w = (h * ar) / coverAr;
    }
    const book = this.querySelector(".book-front") as HTMLElement | null;
    if (book) {
      book.style.setProperty("--cover-w", w.toFixed(1) + "%");
      book.style.setProperty("--cover-h", h.toFixed(1) + "%");
    }
  }

  private async save() {
    if (this.photos.length === 0 || this.saving) return;
    this.saving = true;
    this.take.dataset.busy = "true";
    try {
      if (this.format === "pdf") {
        const { downloadAsPdf } = await import("./convert/pdf");
        await downloadAsPdf(this.photos, "photos.pdf");
      } else if (this.photos.length === 1) {
        const { triggerDownload } = await import("./convert/zip");
        triggerDownload(this.photos[0].blob, this.photos[0].name);
      } else {
        const { downloadAsZip } = await import("./convert/zip");
        await downloadAsZip(this.photos, `photos-${this.format}.zip`);
      }
    } finally {
      this.saving = false;
      delete this.take.dataset.busy;
    }
  }
}

if (!customElements.get("heic-drop")) customElements.define("heic-drop", DropElement);
