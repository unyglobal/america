// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"saint-james-parish","repository":"america","path":"jamaica/saint-james-parish","depth":2,"parent":"jamaica","children":["barrett-town","montego-bay"]});
export const childModules = Object.freeze({"barrett-town":"./barrett-town/barrett-town.js","montego-bay":"./montego-bay/montego-bay.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
