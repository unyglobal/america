// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"parras-de-la-fuente","repository":"america","path":"mexico/coahuila/parras-de-la-fuente","depth":3,"parent":"mexico/coahuila","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
