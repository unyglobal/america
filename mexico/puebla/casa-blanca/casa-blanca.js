// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"casa-blanca","repository":"america","path":"mexico/puebla/casa-blanca","depth":3,"parent":"mexico/puebla","children":["articulo-ciento-veintitres","bosques-de-cuauhyocan","chapultepec","flor-del-bosque","santa-margarita"]});
export const childModules = Object.freeze({"articulo-ciento-veintitres":"./articulo-ciento-veintitres/articulo-ciento-veintitres.js","bosques-de-cuauhyocan":"./bosques-de-cuauhyocan/bosques-de-cuauhyocan.js","chapultepec":"./chapultepec/chapultepec.js","flor-del-bosque":"./flor-del-bosque/flor-del-bosque.js","santa-margarita":"./santa-margarita/santa-margarita.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
