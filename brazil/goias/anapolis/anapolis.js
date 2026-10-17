// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"anapolis","repository":"america","path":"brazil/goias/anapolis","depth":3,"parent":"brazil/goias","children":["vila-de-lourdes","vila-santana"]});
export const childModules = Object.freeze({"vila-de-lourdes":"./vila-de-lourdes/vila-de-lourdes.js","vila-santana":"./vila-santana/vila-santana.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
