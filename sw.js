/* ==========================================================================
   sw.js - offline support.

   The whole site is a fixed list of files, so the service worker just caches
   them on install and serves from cache afterwards. Kitchens have bad wifi.

   VERSION must match the ?v= number on the assets in index.html. Bumping it
   creates a new cache, fills it, then deletes the old one, so an update never
   leaves a half-old half-new mix behind.
   ========================================================================== */

var VERSION = 35;
var CACHE = 'sunday-dinner-v' + VERSION;

var ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './css/style.css?v=' + VERSION,
  './js/util.js?v=' + VERSION,
  './js/store.js?v=' + VERSION,
  './js/kitchen.js?v=' + VERSION,
  './js/data.js?v=' + VERSION,
  './js/render.js?v=' + VERSION,
  './js/app.js?v=' + VERSION,
  './data/recipes-chicken.js?v=' + VERSION,
  './data/recipes-beef-pork.js?v=' + VERSION,
  './data/recipes-seafood.js?v=' + VERSION,
  './data/recipes-vegetarian.js?v=' + VERSION,
  './data/recipes-pasta-grains.js?v=' + VERSION,
  './data/recipes-soups-stews.js?v=' + VERSION,
  './data/recipes-sheet-pan.js?v=' + VERSION,
  './data/recipes-slow-cooker.js?v=' + VERSION,
  './data/recipes-global.js?v=' + VERSION,
  './data/recipes-sides.js?v=' + VERSION,
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE)
      // addAll fails the whole install if any one file 404s, so add them
      // individually and let the page still work if an icon is missing.
      .then(function (cache) {
        return Promise.all(ASSETS.map(function (url) {
          return cache.add(new Request(url, { cache: 'reload' })).catch(function () {});
        }));
      })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys()
      .then(function (keys) {
        return Promise.all(keys.map(function (k) {
          if (k !== CACHE) return caches.delete(k);
        }));
      })
      .then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;

  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Navigations always resolve to the shell, so a deep link opened offline
  // still boots the app and the hash router takes it from there.
  //
  // 'no-cache' forces a revalidation with the server instead of trusting the
  // HTTP cache. Pages serves index.html with a ten minute max-age, and the
  // shell is what names the ?v= of every other asset, so a stale shell keeps
  // pointing at the previous build long after it was replaced.
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req, { cache: 'no-cache' })
        .then(function (res) {
          if (res && res.ok) {
            var copy = res.clone();
            caches.open(CACHE).then(function (c) { c.put('./index.html', copy); });
          }
          return res;
        })
        .catch(function () {
          return caches.match('./index.html').then(function (r) {
            return r || caches.match('./');
          });
        })
    );
    return;
  }

  e.respondWith(
    caches.match(req).then(function (hit) {
      if (hit) return hit;
      return fetch(req).then(function (res) {
        // stash same-origin extras (icons, a newly added data file)
        if (res && res.ok) {
          var copy = res.clone();
          caches.open(CACHE).then(function (c) { c.put(req, copy); });
        }
        return res;
      });
    })
  );
});
