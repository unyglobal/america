// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"misiones-de-santa-fe","repository":"america","path":"mexico/baja-california-sur/colonia-del-sol/misiones-de-santa-fe","depth":4,"parent":"mexico/baja-california-sur/colonia-del-sol","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
