// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"uptown-saint-john","repository":"america","path":"canada/new-brunswick/saint-john/uptown-saint-john","depth":4,"parent":"canada/new-brunswick/saint-john","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
