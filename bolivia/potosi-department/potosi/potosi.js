// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"potosi","repository":"america","path":"bolivia/potosi-department/potosi","depth":3,"parent":"bolivia/potosi-department","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
