// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"colonia-del-sacramento","repository":"america","path":"uruguay/colonia/colonia-del-sacramento","depth":3,"parent":"uruguay/colonia","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
