// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"santa-isabel","repository":"america","path":"mexico/baja-california/santa-isabel","depth":3,"parent":"mexico/baja-california","children":["la-luna","san-jacinto","valle-de-los-angeles"]});
export const childModules = Object.freeze({"la-luna":"./la-luna/la-luna.js","san-jacinto":"./san-jacinto/san-jacinto.js","valle-de-los-angeles":"./valle-de-los-angeles/valle-de-los-angeles.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
