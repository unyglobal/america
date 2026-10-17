// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zona-centro-sur","repository":"america","path":"mexico/coahuila/castanos/zona-centro-sur","depth":4,"parent":"mexico/coahuila/castanos","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
