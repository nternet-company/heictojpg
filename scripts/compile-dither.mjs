// Expands dither-plugin's Tailwind at-rules to plain CSS.
// Source: node_modules/dither-plugin/dist/dither-plugin.css (MIT).
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const source = readFileSync(join(root, "node_modules/dither-plugin/dist/dither-plugin.css"), "utf8");

const sizes = [...source.matchAll(/--dither-cell-([a-z0-9]+):/g)].map((m) => m[1]);

let compiled = source
  .replace(/@theme\s*\{/g, ":root{")
  .replace(/@utility\s+(dither(?:-none)?)\s*\{/g, ".$1{");

const wildcard = compiled.match(/@utility dither-\*\{([\s\S]*?)\}\s*\.dither-none/);
if (!wildcard) throw new Error("wildcard utility not found where expected");
const expanded = sizes
  .map(
    (size) =>
      ".dither-" +
      size +
      "{" +
      wildcard[1].replace(/--value\(--dither-cell-\*,\s*number\)/, "var(--dither-cell-" + size + ")") +
      "}",
  )
  .join("");
compiled = compiled.replace(/@utility dither-\*\{[\s\S]*?\}\s*\.dither-none/, expanded + ".dither-none");

if (compiled.includes("@utility") || compiled.includes("@theme")) {
  throw new Error("unexpanded at-rule left behind; the package layout changed, read it before shipping");
}

const banner =
  "/* Compiled from dither-plugin@" +
  JSON.parse(readFileSync(join(root, "node_modules/dither-plugin/package.json"), "utf8")).version +
  " dist/dither-plugin.css (flornkm, MIT) by scripts/compile-dither.mjs. Do not edit by hand. */\n";

mkdirSync(join(root, "src/styles/vendor"), { recursive: true });
writeFileSync(join(root, "src/styles/vendor/dither-plugin.css"), banner + compiled);
console.log("wrote src/styles/vendor/dither-plugin.css", compiled.length, "bytes");
