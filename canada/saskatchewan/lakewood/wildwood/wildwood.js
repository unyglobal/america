// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"wildwood","repository":"america","path":"canada/saskatchewan/lakewood/wildwood","depth":4,"parent":"canada/saskatchewan/lakewood","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
