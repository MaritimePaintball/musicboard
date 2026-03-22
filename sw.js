// MusicBoard Service Worker
// Caches the app shell for offline use and fast repeat loads.

const CACHE = 'musicboard-v1';
const PRECACHE = [
  '/',
  '/index.html',
  'https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Syne:wght@400;600;700;800&display=swap',
];

// Install — cache core assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting())
  );
});

// Activate — clean up old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch — cache-first for same-origin, network-first for everything else
self.addEventListener('fetch', e => {
  // Don't intercept YouTube iframes or external API calls
  if (e.request.url.includes('youtube.com') ||
      e.request.url.includes('youtu.be') ||
      e.request.method !== 'GET') return;

  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(response => {
        // Cache successful same-origin and font responses
        if (response.ok && (
          e.request.url.startsWith(self.location.origin) ||
          e.request.url.includes('fonts.googleapis.com') ||
          e.request.url.includes('fonts.gstatic.com')
        )) {
          const clone = response.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return response;
      }).catch(() => cached); // Offline fallback to cache
    })
  );
});
