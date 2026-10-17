// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"madriz-department","repository":"america","path":"nicaragua/madriz-department","depth":2,"parent":"nicaragua","children":["somoto"]});
export const childModules = Object.freeze({"somoto":"./somoto/somoto.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
