var CACHE_NAME = 'dontshake-cache-v2';
var urlsToCache = [
    './index.html',
    './css/main.css',
    './js/vue.js',
    './js/main.js',
    './img/fingerprint.png'
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        fetch(event.request).catch(function() {
            return caches.match(event.request);
        })
    );
});