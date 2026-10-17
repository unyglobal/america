// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kettering","repository":"america","path":"united-states/ohio/kettering","depth":3,"parent":"united-states/ohio","children":["short-hills"]});
export const childModules = Object.freeze({"short-hills":"./short-hills/short-hills.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
