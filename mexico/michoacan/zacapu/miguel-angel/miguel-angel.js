// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"miguel-angel","repository":"america","path":"mexico/michoacan/zacapu/miguel-angel","depth":4,"parent":"mexico/michoacan/zacapu","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
