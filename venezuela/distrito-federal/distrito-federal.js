// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"distrito-federal","repository":"america","path":"venezuela/distrito-federal","depth":2,"parent":"venezuela","children":["caracas"]});
export const childModules = Object.freeze({"caracas":"./caracas/caracas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
