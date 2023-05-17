const staticDevCoffee = 'dev-coffee-site-v1';
const assets = [
    "/",
    "/index.html",
    "/css/style.css",
    "/js/app.js",
    "/images/coffee1.jpg",
    "/images/coffee2.jpg",
    "/images/coffee3.jpg",
    "/images/coffee4.jpg",
    "/images/coffee5.jpg",
    "/images/coffee6.jpg",
    "/images/coffee7.jpg",
    "/images/coffee8.jpg",
    "/images/coffee9.jpg",
];

/*self.addEventListener('install', e => {
    console.log('service worker:Installed');
    e.waitUntil(
        caches
        .open(staticDevCoffee)
        .then(cache => {
            console.log('ServiceWorker:cashing files');
            cache.addAll(assets);
        })
        .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', e => {
    console.log('Service worker:Activated');

    e.waitUntil(
        caches.keys().then(staticDevCoffee => {
            return Promise.all(
                staticDevCoffee.map(cache => {
                    if (cache != staticDevCoffee) {
                        console.log('Service Worker: Clearing old caches');
                        return caches.delete(cache);
                    }
                })
            )
        }) //3.4 class diagram 3.3 usecase 2.1 block diagram
    )
});

// call fetch function
self.addEventListener('fetch', e => {
    console.log('Service Worker: fetching')
    e.respondWith(
        fetch(e.request).catch(() => caches.match(e.request))
    )
})*/

//call install event
self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticDevCoffee).then(cache => {
            cache.addAll(assets)
        })
    )
})


self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})