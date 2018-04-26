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
            console.log('service worker installed');
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        console.log('fetching');
        fetch(event.request).catch(function() {
            console.log('get from cache');
            return caches.match(event.request);
        })
    );
});