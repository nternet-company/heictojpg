/**
 * A very small Worker in front of the static assets.
 *
 * It exists for one reason: the site answers on four origins (http and https,
 * apex and www) and only https://heictojpg.photo is canonical. Cloudflare
 * already redirected https://www, but plain http was still served with a 200,
 * so Google crawled http://www.heictojpg.photo/ and filed it as "Alternate
 * page with proper canonical tag". Every non-canonical origin now answers with
 * a single 301 instead, the same way nendo.world does.
 *
 * A Worker in front means `public/_headers` no longer runs, so the asset
 * headers live here instead and this file is their only source of truth.
 */

interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
}

const CANONICAL_HOST = "heictojpg.photo";
const CANONICAL_ORIGIN = `https://${CANONICAL_HOST}`;

const SECURITY_HEADERS: Record<string, string> = {
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-Frame-Options": "SAMEORIGIN",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  // Now that http always redirects, tell browsers never to try it again.
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
};

const IMMUTABLE = "public, max-age=31536000, immutable";

/**
 * The HTML is cheap to revalidate and must stay fresh when copy changes; the
 * hashed assets and the WASM decoder never change under the same name, so they
 * get a year.
 */
function cacheControlFor(pathname: string): string {
  if (pathname.startsWith("/_astro/") || pathname.endsWith(".wasm")) return IMMUTABLE;
  if (pathname === "/icon.svg") return "public, max-age=604800";
  return "public, max-age=0, must-revalidate";
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // Only the production zone is canonicalised. workers.dev previews and
    // `wrangler dev` keep whatever host they were opened on.
    const onZone = url.hostname === CANONICAL_HOST || url.hostname === `www.${CANONICAL_HOST}`;
    if (onZone && (url.protocol !== "https:" || url.hostname !== CANONICAL_HOST)) {
      return Response.redirect(`${CANONICAL_ORIGIN}${url.pathname}${url.search}`, 301);
    }

    const response = await env.ASSETS.fetch(request);
    const headers = new Headers(response.headers);
    for (const [name, value] of Object.entries(SECURITY_HEADERS)) headers.set(name, value);
    headers.set("Cache-Control", cacheControlFor(url.pathname));
    if (url.pathname.endsWith(".wasm")) headers.set("Content-Type", "application/wasm");

    // 204 and 304 carry no body, and the Response constructor rejects one.
    const body = response.status === 204 || response.status === 304 ? null : response.body;
    return new Response(body, { status: response.status, statusText: response.statusText, headers });
  },
};
