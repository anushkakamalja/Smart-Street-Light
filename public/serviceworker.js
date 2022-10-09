/* eslint-disable no-restricted-globals */
const CACHE_NAME = "version-1"
const urlstoCache = ["index.html","offline.html"]
this.addEventListener('install',(event)=>{
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache)=>{
            console.log("Opened Cache");
            return cache.addAll(urlstoCache);
        })
    )
})


// listen for request
self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((res) => {
        return fetch(event.request).catch(() => caches.match("offline.html"));
      })
    );
  });
  
  // actitivate the service worker
  self.addEventListener("activate", (event) => {
      const cacheWhitelist = [];
      cacheWhitelist.push(CACHE_NAME);
      event.waitUntil(
          caches.keys().then((cacheNames) => Promise.all(
              cacheNames.map((cacheName) => {
                  if(!cacheWhitelist.includes(cacheName)){
                      return caches.delete(cacheName);
                  }
              })
          ))
      )
  });