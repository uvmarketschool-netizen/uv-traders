self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("uv-traders-cache").then((cache) => {
      return cache.addAll([
        "/index.html",
        "/dashboard.html",
        "/admin.html"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
