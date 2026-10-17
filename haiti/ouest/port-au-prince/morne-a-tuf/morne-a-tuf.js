// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"morne-a-tuf","repository":"america","path":"haiti/ouest/port-au-prince/morne-a-tuf","depth":4,"parent":"haiti/ouest/port-au-prince","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
