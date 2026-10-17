// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"planta-de-molde","repository":"america","path":"panama/bocas-del-toro-province/changuinola/planta-de-molde","depth":4,"parent":"panama/bocas-del-toro-province/changuinola","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
