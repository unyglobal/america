// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sol-de-america","repository":"america","path":"paraguay/central-department/villa-elisa/sol-de-america","depth":4,"parent":"paraguay/central-department/villa-elisa","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
