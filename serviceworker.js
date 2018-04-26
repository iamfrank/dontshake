var CACHE_NAME = 'dontshake-cache-v11';
var urlsToCache = [
    './',
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
        caches.match(event.request)
            .then(function(response) {
                if (response) {
                    console.log('returning cached response');
                    return response;
                }
                console.log('requesting online response');
                return fetch(event.request);
            }
        )
    );
});