// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cuilapa","repository":"america","path":"guatemala/santa-rosa-department/cuilapa","depth":3,"parent":"guatemala/santa-rosa-department","children":["colonia-valladares"]});
export const childModules = Object.freeze({"colonia-valladares":"./colonia-valladares/colonia-valladares.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
