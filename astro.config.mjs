// @ts-check
import { readFile, readdir, writeFile } from "node:fs/promises";
import { extname, join } from "node:path";

import { defineConfig } from "astro/config";

import { SITE_URL } from "./src/config.mjs";

/**
 * Real HEIC files, in the dev server only.
 *
 * They are somebody's actual photographs, so they must never be copied into a
 * build or served in production. Putting them in `public/` would do both,
 * because Astro copies that folder wholesale and does not care what git thinks
 * of it. This serves them from a sibling folder that only the dev server can
 * see, so testing with real camera output stays one drag away and the deployed
 * site has nothing of anybody's in it.
 */
/** @returns {import("vite").Plugin} */
function heicFixtures() {
  const dir = new URL("./fixtures-heic/", import.meta.url).pathname;
  return {
    name: "heic-fixtures-dev-only",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use(
        "/_fixtures",
        /**
         * @param {import("node:http").IncomingMessage} request
         * @param {import("node:http").ServerResponse} response
         * @param {(error?: unknown) => void} next
         */
        async (request, response, next) => {
        try {
          const name = decodeURIComponent((request.url || "/").split("?")[0]).replace(/^\//, "");
          if (!name) {
            const files = await readdir(dir);
            response.setHeader("content-type", "application/json");
            response.end(JSON.stringify(files.filter((f) => /\.hei[cf]$/i.test(f))));
            return;
          }
          if (name.includes("..") || !/^[\w.-]+$/.test(name) || extname(name).toLowerCase() !== ".heic") {
            next();
            return;
          }
          response.setHeader("content-type", "image/heic");
          response.end(await readFile(join(dir, name)));
        } catch {
          next();
        }
      },
      );

      // A dev-only way to get a canvas out of the browser and onto disk, used
      // to author the social preview images from the same fonts and colours
      // the page itself uses rather than redrawing them by hand somewhere else.
      server.middlewares.use(
        "/_save",
        /**
         * @param {import("node:http").IncomingMessage} request
         * @param {import("node:http").ServerResponse} response
         * @param {(error?: unknown) => void} next
         */
        (request, response, next) => {
          if (request.method !== "POST") {
            next();
            return;
          }
          const name = decodeURIComponent((request.url || "/").split("?")[0]).replace(/^\//, "");
          if (!/^[\w.-]+\.png$/.test(name)) {
            next();
            return;
          }
          /** @type {Buffer[]} */
          const chunks = [];
          request.on("data", (chunk) => chunks.push(chunk));
          request.on("end", async () => {
            await writeFile(join(new URL("./public/", import.meta.url).pathname, name), Buffer.concat(chunks));
            response.end("saved " + name);
          });
        },
      );
    },
  };
}

export default defineConfig({
  site: SITE_URL,
  output: "static",
  trailingSlash: "never",
  build: { format: "directory", inlineStylesheets: "always" },
  vite: {
    plugins: [heicFixtures()],
    // libheif is a deliberately lazy decoder payload. Keep the first screen
    // tiny while giving that known conversion chunk an honest warning budget.
    build: { assetsInlineLimit: 0, chunkSizeWarningLimit: 3200 },
    worker: { format: "es" },
  },
});
