// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"throgs-neck-houses","repository":"america","path":"united-states/new-york/throgs-neck/throgs-neck-houses","depth":4,"parent":"united-states/new-york/throgs-neck","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
