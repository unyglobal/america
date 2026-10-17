// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-lorenzo-chimalpa","repository":"america","path":"mexico/mexico/san-mateo-huitzilzingo/san-lorenzo-chimalpa","depth":4,"parent":"mexico/mexico/san-mateo-huitzilzingo","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
