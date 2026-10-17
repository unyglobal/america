// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"paseo-de-las-camelias","repository":"america","path":"panama/panama/la-cabima/paseo-de-las-camelias","depth":4,"parent":"panama/panama/la-cabima","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
