// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"alto-barinas","repository":"america","path":"venezuela/barinas/alto-barinas","depth":3,"parent":"venezuela/barinas","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
