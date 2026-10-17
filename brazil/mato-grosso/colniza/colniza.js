// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"colniza","repository":"america","path":"brazil/mato-grosso/colniza","depth":3,"parent":"brazil/mato-grosso","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
