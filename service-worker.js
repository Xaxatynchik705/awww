// Импортируемые файлы и библиотеки кэшируются
const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  '/',
  '/styles.css',
  '/calculator.js',
  '/icon-192x192.png',
  '/icon-512x512.png'
];

self.addEventListener('install', function(event) {
  // Устанавливаем Service Worker
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  // Ответ на запросы
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Возвращаем закэшированный ресурс, если он есть, иначе - запрос из сети
        return response || fetch(event.request);
      })
  );
});
