// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"balzar","repository":"america","path":"ecuador/guayas/balzar","depth":3,"parent":"ecuador/guayas","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
