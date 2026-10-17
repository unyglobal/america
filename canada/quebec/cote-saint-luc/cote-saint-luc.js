// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cote-saint-luc","repository":"america","path":"canada/quebec/cote-saint-luc","depth":3,"parent":"canada/quebec","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
