// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"setenta-y-ocho-ochenta","repository":"america","path":"mexico/tamaulipas/ciudad-rio-bravo/setenta-y-ocho-ochenta","depth":4,"parent":"mexico/tamaulipas/ciudad-rio-bravo","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
