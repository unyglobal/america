// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fernando-de-la-mora","repository":"america","path":"paraguay/central-department/fernando-de-la-mora","depth":3,"parent":"paraguay/central-department","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
