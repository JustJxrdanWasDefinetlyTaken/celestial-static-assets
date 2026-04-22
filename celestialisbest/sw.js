importScripts(
  "https://cdn.jsdelivr.net/gh/JustJxrdanWasDefinetlyTaken/celestial-static-assets@latest/violet/violet.bundle.js",
)
importScripts("https://cdn.jsdelivr.net/gh/JustJxrdanWasDefinetlyTaken/celestial-static-assets@latest/violet/violet.config.js")
importScripts("https://cdn.jsdelivr.net/gh/JustJxrdanWasDefinetlyTaken/celestial-static-assets@latest/violet/violet.sw.js")
importScripts("https://cdn.jsdelivr.net/gh/JustJxrdanWasDefinetlyTaken/celestial-static-assets@latest/scram/featurecontrol.ACSHASHf120033122e43a4cb0b53bb306afc5dc.min.js");
importScripts("https://cdn.jsdelivr.net/gh/JustJxrdanWasDefinetlyTaken/celestial-static-assets@latest/celestialisbest/assets/js/ww/workerware.js");
importScripts("https://raw.githubusercontent.com/titaniumnetwork-dev/Pyrus/refs/heads/main/public/marketplace/adblock/index.js");

const ww = new WorkerWare();

ww.use({
  function: self.adblockExt.filterRequest,
  events: ["fetch"],
  name: "Adblock"
});

if (navigator.userAgent.includes("Firefox")) {
  Object.defineProperty(globalThis, "crossOriginIsolated", {
    value: true,
    writable: true,
  })
}

const violet = new UVServiceWorker()
const { ScramjetServiceWorker } = $scramjetLoadWorker();
const scramjet = new ScramjetServiceWorker();

self.addEventListener("install", () => {
  self.skipWaiting()
})

async function handleRequest(event) {
  await scramjet.loadConfig()
  if (scramjet.route(event)) {
    return scramjet.fetch(event)
  }


  if (violet.route(event)) return await violet.fetch(event);
    
  return await fetch(event.request)
}

self.addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event))
})

self.addEventListener("install", (self) => {
	self.skipWaiting()
})