// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"barrio-leonardo-ruiz-pineda","repository":"america","path":"venezuela/aragua/las-tejerias/barrio-leonardo-ruiz-pineda","depth":4,"parent":"venezuela/aragua/las-tejerias","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
