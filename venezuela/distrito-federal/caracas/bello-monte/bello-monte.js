// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bello-monte","repository":"america","path":"venezuela/distrito-federal/caracas/bello-monte","depth":4,"parent":"venezuela/distrito-federal/caracas","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
