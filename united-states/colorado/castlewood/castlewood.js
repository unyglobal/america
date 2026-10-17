// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"castlewood","repository":"america","path":"united-states/colorado/castlewood","depth":3,"parent":"united-states/colorado","children":["castlewood-historical"]});
export const childModules = Object.freeze({"castlewood-historical":"./castlewood-historical/castlewood-historical.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
