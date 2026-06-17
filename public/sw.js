// LeadBid service worker — minimal, network-first.
// Goal: satisfy PWA installability and provide a basic offline fallback,
// WITHOUT aggressively caching (so you always demo the latest version online).

const CACHE = "leadbid-v1";
const APP_SHELL = ["/", "/index.html", "/manifest.webmanifest", "/icon-192.png", "/icon-512.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(APP_SHELL)).catch(() => {}));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

// Network-first: try the live version, fall back to cache only if offline.
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copy)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(e.request).then((r) => r || caches.match("/index.html")))
  );
});
