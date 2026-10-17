// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"itatira","repository":"america","path":"brazil/ceara/itatira","depth":3,"parent":"brazil/ceara","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
