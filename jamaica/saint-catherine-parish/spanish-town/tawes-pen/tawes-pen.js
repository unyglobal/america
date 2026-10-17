// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tawes-pen","repository":"america","path":"jamaica/saint-catherine-parish/spanish-town/tawes-pen","depth":4,"parent":"jamaica/saint-catherine-parish/spanish-town","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
