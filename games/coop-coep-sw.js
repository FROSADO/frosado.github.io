/*
 * COOP/COEP Service Worker for Godot HTML5 games on GitHub Pages.
 *
 * GitHub Pages does not allow custom HTTP headers. This Service Worker
 * intercepts all fetch responses and adds the required headers so that
 * SharedArrayBuffer is available (needed by Godot 4.x threading).
 *
 * Based on: https://github.com/niccokunzmann/coop-coep-sw
 * Reference: https://web.dev/articles/coop-coep
 */

const CACHE_NAME = "godot-games-v1";

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  // Only intercept same-origin requests
  if (event.request.mode === "navigate" ||
      (event.request.mode === "no-cors" && event.request.destination === "script") ||
      event.request.destination === "worker") {

    event.respondWith(
      fetch(event.request).then((response) => {
        // Clone the response to modify headers
        const newHeaders = new Headers(response.headers);
        newHeaders.set("Cross-Origin-Opener-Policy", "same-origin");
        newHeaders.set("Cross-Origin-Embedder-Policy", "credentialless");

        return new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers: newHeaders,
        });
      })
    );
  }
});
