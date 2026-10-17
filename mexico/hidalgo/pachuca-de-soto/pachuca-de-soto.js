// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pachuca-de-soto","repository":"america","path":"mexico/hidalgo/pachuca-de-soto","depth":3,"parent":"mexico/hidalgo","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
