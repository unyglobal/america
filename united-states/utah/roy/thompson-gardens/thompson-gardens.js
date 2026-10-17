// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"thompson-gardens","repository":"america","path":"united-states/utah/roy/thompson-gardens","depth":4,"parent":"united-states/utah/roy","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
