// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"luis-j-garcia","repository":"america","path":"argentina/buenos-aires-f-d/villa-lugano/luis-j-garcia","depth":4,"parent":"argentina/buenos-aires-f-d/villa-lugano","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
