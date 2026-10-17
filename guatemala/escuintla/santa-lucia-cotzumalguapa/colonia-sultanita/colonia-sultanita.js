// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"colonia-sultanita","repository":"america","path":"guatemala/escuintla/santa-lucia-cotzumalguapa/colonia-sultanita","depth":4,"parent":"guatemala/escuintla/santa-lucia-cotzumalguapa","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
