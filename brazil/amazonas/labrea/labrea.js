// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"labrea","repository":"america","path":"brazil/amazonas/labrea","depth":3,"parent":"brazil/amazonas","children":["beira-rio","igarape-da-fonte","igarape-da-ponte"]});
export const childModules = Object.freeze({"beira-rio":"./beira-rio/beira-rio.js","igarape-da-fonte":"./igarape-da-fonte/igarape-da-fonte.js","igarape-da-ponte":"./igarape-da-ponte/igarape-da-ponte.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
