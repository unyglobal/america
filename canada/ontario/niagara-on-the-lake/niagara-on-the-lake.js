// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"niagara-on-the-lake","repository":"america","path":"canada/ontario/niagara-on-the-lake","depth":3,"parent":"canada/ontario","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
