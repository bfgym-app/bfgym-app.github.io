// Service worker mínimo de Team Barros: solo permite instalar la app como acceso directo.
// No guarda datos de los usuarios ni copias de la app.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (event) => {
  if (new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(fetch(event.request));
});
