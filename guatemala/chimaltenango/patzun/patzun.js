// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"patzun","repository":"america","path":"guatemala/chimaltenango/patzun","depth":3,"parent":"guatemala/chimaltenango","children":["colonia-noruega"]});
export const childModules = Object.freeze({"colonia-noruega":"./colonia-noruega/colonia-noruega.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
