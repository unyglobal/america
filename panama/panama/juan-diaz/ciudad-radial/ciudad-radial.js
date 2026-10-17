// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ciudad-radial","repository":"america","path":"panama/panama/juan-diaz/ciudad-radial","depth":4,"parent":"panama/panama/juan-diaz","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
