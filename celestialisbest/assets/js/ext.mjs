// we be injecting
// thank you slqnt big hug and kisses
// no homo..

// inject lithium/lethal.js from rohan
import { currentFrame } from "https://cdn.jsdelivr.net/gh/JustJxrdanWasDefinetlyTaken/celestial-static-assets@main/celestialisbest/lithium.mjs";
// fetch json
const exts = await fetch("https://cdn.jsdelivr.net/gh/JustJxrdanWasDefinetlyTaken/celestial-static-assets@main/celestialisbest/assets/json/ext.json").then(r => r.json());

if (currentFrame) {
  currentFrame.addEventListener("load", () => {
    const url = currentFrame.dataset.displayUrl;
    const doc = currentFrame.contentDocument;

    if (!doc || !url) return;

    exts.forEach(e => {
      const sites = [].concat(e.website);
      if (e.includes === "yes" ? sites.some(s => url.includes(s)) : sites.includes(new URL(url).hostname)) {
        const s = doc.createElement("script");
        s.textContent = e.src;
        (doc.body || doc.documentElement).prepend(s);
      }
    });
  });
} else {
  console.error("currentFrame is undefined. Check the import path.");
}