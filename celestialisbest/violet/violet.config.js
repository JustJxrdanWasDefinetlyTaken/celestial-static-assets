self.__uv$config = {
  prefix: "/celestialisbest/service/ultra/",
  encodeUrl: (str) => {
    if (!str) return str;
    return encodeURIComponent(str);
  },
  decodeUrl: (str) => {
    if (!str) return str;
    return decodeURIComponent(str);
  },
  handler:
    "/celestialisbest/violet/violet.handler.js",
  client:
    "/celestialisbest/violet/violet.client.js",
  bundle:
    "/celestialisbest/violet/violet.bundle.js",
  config: "/celestialisbest/violet.config.js",
  sw: "/celestialisbest/violet/violet.sw.js",
}
