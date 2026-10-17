// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"balvanera","repository":"america","path":"argentina/buenos-aires-f-d/balvanera","depth":3,"parent":"argentina/buenos-aires-f-d","children":["congreso","once"]});
export const childModules = Object.freeze({"congreso":"./congreso/congreso.js","once":"./once/once.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
