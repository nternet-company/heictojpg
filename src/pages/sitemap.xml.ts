/**
 * The sitemap, written by hand.
 *
 * `@astrojs/sitemap` with `i18n` was tried first and it gets this site wrong,
 * because it works out alternates by assuming every locale of a page lives at
 * the same path under a different prefix. This site translates its slugs, so
 * `/heic-to-png` is `/de/heic-in-png-umwandeln` and `/pl/heic-na-png`, and the
 * integration silently emitted alternates for the seven home pages and none at
 * all for the fourteen translated ones. It also wrote the root with a trailing
 * slash while every canonical on the site is written without one.
 *
 * This file reads the same slug table the pages and the hreflang links read, so
 * the three can never disagree.
 */
import type { APIRoute } from "astro";

import { SITE_URL } from "../config.mjs";
import { READY_LOCALES } from "../content";
import { alternates, LOCALE_TAGS, pathFor, DEFAULT_LOCALE, type PageId } from "../lib/site";

/** Every page, and which locales actually exist for it. */
const PAGES: { page: PageId; localised: boolean; priority: string }[] = [
  { page: "home", localised: true, priority: "1.0" },
  { page: "png", localised: true, priority: "0.8" },
  { page: "pdf", localised: true, priority: "0.8" },
  { page: "about", localised: false, priority: "0.3" },
  { page: "privacy", localised: false, priority: "0.3" },
  { page: "terms", localised: false, priority: "0.3" },
];

const escape = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const absolute = (path: string) => escape(new URL(path, SITE_URL).href);

export const GET: APIRoute = () => {
  const entries: string[] = [];

  for (const { page, localised, priority } of PAGES) {
    const locales = localised ? READY_LOCALES : [DEFAULT_LOCALE];
    const links = localised
      ? alternates(page)
          .filter((alt) => READY_LOCALES.includes(alt.locale))
          .map(
            (alt) =>
              `<xhtml:link rel="alternate" hreflang="${LOCALE_TAGS[alt.locale]}" href="${absolute(alt.path)}"/>`,
          )
          .concat(
            `<xhtml:link rel="alternate" hreflang="x-default" href="${absolute(pathFor(page, DEFAULT_LOCALE))}"/>`,
          )
          .join("")
      : "";

    for (const locale of locales) {
      entries.push(
        `<url><loc>${absolute(pathFor(page, locale))}</loc>${links}<changefreq>monthly</changefreq><priority>${priority}</priority></url>`,
      );
    }
  }

  const body =
    '<?xml version="1.0" encoding="UTF-8"?>' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">' +
    entries.join("") +
    "</urlset>";

  return new Response(body, {
    headers: { "content-type": "application/xml; charset=utf-8" },
  });
};
