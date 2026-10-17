// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rubio","repository":"america","path":"venezuela/tachira/rubio","depth":3,"parent":"venezuela/tachira","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
