// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fray-bentos","repository":"america","path":"uruguay/rio-negro-department/fray-bentos","depth":3,"parent":"uruguay/rio-negro-department","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
