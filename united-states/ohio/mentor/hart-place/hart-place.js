// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hart-place","repository":"america","path":"united-states/ohio/mentor/hart-place","depth":4,"parent":"united-states/ohio/mentor","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
