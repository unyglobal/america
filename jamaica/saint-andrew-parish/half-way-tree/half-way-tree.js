// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"half-way-tree","repository":"america","path":"jamaica/saint-andrew-parish/half-way-tree","depth":3,"parent":"jamaica/saint-andrew-parish","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
