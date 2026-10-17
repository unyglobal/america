// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"emiliano-zapata","repository":"america","path":"mexico/colima/ciudad-de-villa-de-alvarez/emiliano-zapata","depth":4,"parent":"mexico/colima/ciudad-de-villa-de-alvarez","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
