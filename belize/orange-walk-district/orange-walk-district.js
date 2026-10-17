// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"orange-walk-district","repository":"america","path":"belize/orange-walk-district","depth":2,"parent":"belize","children":["orange-walk"]});
export const childModules = Object.freeze({"orange-walk":"./orange-walk/orange-walk.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
