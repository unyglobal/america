// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"changuinola","repository":"america","path":"panama/bocas-del-toro-province/changuinola","depth":3,"parent":"panama/bocas-del-toro-province","children":["finca-sesenta-y-cinco","planta-de-molde"]});
export const childModules = Object.freeze({"finca-sesenta-y-cinco":"./finca-sesenta-y-cinco/finca-sesenta-y-cinco.js","planta-de-molde":"./planta-de-molde/planta-de-molde.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
