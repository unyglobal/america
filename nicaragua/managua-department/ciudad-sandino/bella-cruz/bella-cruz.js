// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bella-cruz","repository":"america","path":"nicaragua/managua-department/ciudad-sandino/bella-cruz","depth":4,"parent":"nicaragua/managua-department/ciudad-sandino","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
