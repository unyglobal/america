// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"prados-de-moctezuma","repository":"america","path":"mexico/san-luis-potosi/ciudad-fernandez/prados-de-moctezuma","depth":4,"parent":"mexico/san-luis-potosi/ciudad-fernandez","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
