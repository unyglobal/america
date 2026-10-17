// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"guarenas","repository":"america","path":"venezuela/carabobo/miranda/guarenas","depth":4,"parent":"venezuela/carabobo/miranda","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
