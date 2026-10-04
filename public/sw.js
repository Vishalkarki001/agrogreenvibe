/* ===========================================================================
 * AGRO GREENVIBE — Service Worker
 *
 * Do kaam karta hai:
 *   1. Website ko install-able banata hai (PWA ke liye fetch handler zaroori hai)
 *   2. Visited pages aur assets cache karta hai — dobara khulne par turant load,
 *      aur internet na hone par offline page.
 *
 * Strategy:
 *   - /_next/static/*  -> cache-first  (hashed filenames, kabhi badalte nahi)
 *   - images           -> stale-while-revalidate (turant dikhao, background me update)
 *   - page navigations -> network-first (hamesha fresh content, offline par cache)
 *   - /api/*           -> kabhi cache nahi (forms/emails hamesha live jaane chahiye)
 *
 * CACHE_VERSION badalne par purane saare caches delete ho jaate hain.
 * =========================================================================== */

const CACHE_VERSION = "agv-v1";
const STATIC_CACHE = `${CACHE_VERSION}-static`;
const PAGE_CACHE = `${CACHE_VERSION}-pages`;
const IMAGE_CACHE = `${CACHE_VERSION}-images`;

const OFFLINE_URL = "/offline";
const PRECACHE = [OFFLINE_URL, "/icons/icon-192.png"];

// Dev mode me caching band — warna code change karne par purana version
// dikhta rehta hai. Page `/sw.js?dev=1` se register karta hai jab
// NODE_ENV=development hota hai, isliye ye hostname par depend nahi karta —
// production build localhost par bhi theek se test ho jaata hai.
// Fetch listener phir bhi registered rehta hai, isliye install prompt dev me
// bhi kaam karta hai.
const IS_DEV =
  new URL(self.location.href).searchParams.get("dev") === "1";

// Cache ko bebandh badhne se rokne ke liye simple size limit.
async function trimCache(cacheName, maxEntries) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  if (keys.length <= maxEntries) return;
  // Sabse purani entries pehle hatao (keys insertion order me aati hain).
  await Promise.all(keys.slice(0, keys.length - maxEntries).map((k) => cache.delete(k)));
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(STATIC_CACHE);
      // Individually add karte hain — ek file fail ho to poora install fail na ho.
      await Promise.all(
        PRECACHE.map((url) => cache.add(url).catch(() => undefined))
      );
      await self.skipWaiting();
    })()
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(
        names
          .filter((n) => !n.startsWith(CACHE_VERSION))
          .map((n) => caches.delete(n))
      );
      await self.clients.claim();
    })()
  );
});

// Page se "update now" message aaye to turant naya SW activate karo.
self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Dev me sab kuch seedha network se — koi caching nahi.
  if (IS_DEV) return;

  // Sirf same-origin GET handle karte hain.
  if (request.method !== "GET") return;

  let url;
  try {
    url = new URL(request.url);
  } catch {
    return;
  }
  if (url.origin !== self.location.origin) return;

  // API calls (contact/feedback forms) kabhi cache nahi — hamesha live.
  if (url.pathname.startsWith("/api/")) return;

  // Next.js ke RSC payloads cache karne se client navigation toot sakta hai.
  if (url.searchParams.has("_rsc")) return;

  // ---- 1. Build assets: hashed hain, isliye cache-first safe hai ----
  if (url.pathname.startsWith("/_next/static/")) {
    event.respondWith(cacheFirst(request, STATIC_CACHE));
    return;
  }

  // ---- 2. Images: pehle cache se dikhao, background me refresh ----
  if (
    request.destination === "image" ||
    url.pathname.startsWith("/_next/image") ||
    /\.(png|jpe?g|webp|avif|gif|svg|ico)$/i.test(url.pathname)
  ) {
    event.respondWith(staleWhileRevalidate(request, IMAGE_CACHE, 120));
    return;
  }

  // ---- 3. Page navigations: network-first, offline par cache ----
  if (request.mode === "navigate") {
    event.respondWith(networkFirstPage(request));
    return;
  }

  // ---- 4. Baaki (fonts, manifest waghairah) ----
  if (request.destination === "font" || url.pathname.endsWith(".webmanifest")) {
    event.respondWith(staleWhileRevalidate(request, STATIC_CACHE, 60));
  }
});

async function cacheFirst(request, cacheName) {
  const cached = await caches.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return Response.error();
  }
}

async function staleWhileRevalidate(request, cacheName, maxEntries) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);

  const network = fetch(request)
    .then((response) => {
      if (response.ok) {
        cache.put(request, response.clone());
        trimCache(cacheName, maxEntries);
      }
      return response;
    })
    .catch(() => undefined);

  // Cache hai to turant wahi do; na ho to network ka wait karo.
  return cached || (await network) || Response.error();
}

async function networkFirstPage(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(PAGE_CACHE);
      cache.put(request, response.clone());
      trimCache(PAGE_CACHE, 40);
    }
    return response;
  } catch {
    // Internet nahi — pehle isi page ka cache dekho, warna offline page.
    const cached = await caches.match(request);
    if (cached) return cached;
    const offline = await caches.match(OFFLINE_URL);
    if (offline) return offline;
    return new Response("You are offline.", {
      status: 503,
      headers: { "Content-Type": "text/plain" },
    });
  }
}
