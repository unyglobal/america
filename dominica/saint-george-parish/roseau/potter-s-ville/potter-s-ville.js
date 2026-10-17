// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"potter-s-ville","repository":"america","path":"dominica/saint-george-parish/roseau/potter-s-ville","depth":4,"parent":"dominica/saint-george-parish/roseau","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
