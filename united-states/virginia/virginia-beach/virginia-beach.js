// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"virginia-beach","repository":"america","path":"united-states/virginia/virginia-beach","depth":3,"parent":"united-states/virginia","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
