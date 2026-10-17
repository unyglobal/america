// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"oriente-kilometro-2","repository":"america","path":"mexico/sonora/empalme/oriente-kilometro-2","depth":4,"parent":"mexico/sonora/empalme","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
