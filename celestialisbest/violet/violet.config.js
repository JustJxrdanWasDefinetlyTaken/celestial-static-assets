self.__uv$config = {
  prefix: "https://cdn.jsdelivr.net/gh/JustJxrdanWasDefinetlyTaken/celestial-static@main/celestialisbest/service/ultra/",
  encodeUrl: (str) => {
    if (!str) return str;
    return encodeURIComponent(str);
  },
  decodeUrl: (str) => {
    if (!str) return str;
    return decodeURIComponent(str);
  },
  handler:
    "https://cdn.jsdelivr.net/gh/JustJxrdanWasDefinetlyTaken/celestial-static@main/celestialisbest/violet/violet.handler.js",
  client:
    "https://cdn.jsdelivr.net/gh/JustJxrdanWasDefinetlyTaken/celestial-static@main/celestialisbest/violet/violet.client.js",
  bundle:
    "https://cdn.jsdelivr.net/gh/JustJxrdanWasDefinetlyTaken/celestial-static@main/celestialisbest/violet/violet.bundle.js",
  config: "https://cdn.jsdelivr.net/gh/JustJxrdanWasDefinetlyTaken/celestial-static@main/celestialisbest/violet.config.js",
  sw: "https://cdn.jsdelivr.net/gh/JustJxrdanWasDefinetlyTaken/celestial-static@main/celestialisbest/violet/violet.sw.js",
}
