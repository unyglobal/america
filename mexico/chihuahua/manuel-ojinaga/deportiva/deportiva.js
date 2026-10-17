// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"deportiva","repository":"america","path":"mexico/chihuahua/manuel-ojinaga/deportiva","depth":4,"parent":"mexico/chihuahua/manuel-ojinaga","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
