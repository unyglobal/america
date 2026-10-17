// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vinales","repository":"america","path":"cuba/pinar-del-rio/vinales","depth":3,"parent":"cuba/pinar-del-rio","children":["cuartel"]});
export const childModules = Object.freeze({"cuartel":"./cuartel/cuartel.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
