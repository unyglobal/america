// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sicuani","repository":"america","path":"peru/cuzco-department/sicuani","depth":3,"parent":"peru/cuzco-department","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
