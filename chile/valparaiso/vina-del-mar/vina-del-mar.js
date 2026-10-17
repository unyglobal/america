// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vina-del-mar","repository":"america","path":"chile/valparaiso/vina-del-mar","depth":3,"parent":"chile/valparaiso","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
