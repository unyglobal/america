// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"alto-do-cemiterio","repository":"america","path":"brazil/ceara/guaiuba/alto-do-cemiterio","depth":4,"parent":"brazil/ceara/guaiuba","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
