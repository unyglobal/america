// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ushuaia","repository":"america","path":"argentina/tierra-del-fuego/ushuaia","depth":3,"parent":"argentina/tierra-del-fuego","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
