// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bani","repository":"america","path":"dominican-republic/peravia/bani","depth":3,"parent":"dominican-republic/peravia","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
