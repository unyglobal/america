// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"arizona","repository":"america","path":"honduras/atlantida-department/arizona","depth":3,"parent":"honduras/atlantida-department","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
