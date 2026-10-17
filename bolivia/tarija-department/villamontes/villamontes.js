// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"villamontes","repository":"america","path":"bolivia/tarija-department/villamontes","depth":3,"parent":"bolivia/tarija-department","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
