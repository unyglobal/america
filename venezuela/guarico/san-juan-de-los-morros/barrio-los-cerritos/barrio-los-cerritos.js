// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"barrio-los-cerritos","repository":"america","path":"venezuela/guarico/san-juan-de-los-morros/barrio-los-cerritos","depth":4,"parent":"venezuela/guarico/san-juan-de-los-morros","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
