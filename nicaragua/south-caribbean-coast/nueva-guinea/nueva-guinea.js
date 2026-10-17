// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nueva-guinea","repository":"america","path":"nicaragua/south-caribbean-coast/nueva-guinea","depth":3,"parent":"nicaragua/south-caribbean-coast","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
