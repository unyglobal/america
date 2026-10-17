// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"amatitlan","repository":"america","path":"guatemala/guatemala/amatitlan","depth":3,"parent":"guatemala/guatemala","children":["colonia-hernandez"]});
export const childModules = Object.freeze({"colonia-hernandez":"./colonia-hernandez/colonia-hernandez.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
