// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"loma-bonita","repository":"america","path":"mexico/chiapas/motozintla/loma-bonita","depth":4,"parent":"mexico/chiapas/motozintla","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
