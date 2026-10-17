// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"santa-rosa-department","repository":"america","path":"guatemala/santa-rosa-department","depth":2,"parent":"guatemala","children":["barberena","cuilapa","guazacapan"]});
export const childModules = Object.freeze({"barberena":"./barberena/barberena.js","cuilapa":"./cuilapa/cuilapa.js","guazacapan":"./guazacapan/guazacapan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
