const CACHE="qr-scanner-v1";

self.addEventListener("install",e=>{
  e.waitUntil(
    caches.open(CACHE).then(cache=>{
      return cache.addAll([
        "./",
        "./index.html",
        "./jsQR.js",
        "./manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch",e=>{
  e.respondWith(
    caches.match(e.request).then(res=> res || fetch(e.request))
  );
});
