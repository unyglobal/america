// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"roma","repository":"america","path":"mexico/coahuila/piedras-negras/roma","depth":4,"parent":"mexico/coahuila/piedras-negras","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
