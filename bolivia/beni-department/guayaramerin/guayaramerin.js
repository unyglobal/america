// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"guayaramerin","repository":"america","path":"bolivia/beni-department/guayaramerin","depth":3,"parent":"bolivia/beni-department","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
