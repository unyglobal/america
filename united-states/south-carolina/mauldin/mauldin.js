// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mauldin","repository":"america","path":"united-states/south-carolina/mauldin","depth":3,"parent":"united-states/south-carolina","children":["summerwoods"]});
export const childModules = Object.freeze({"summerwoods":"./summerwoods/summerwoods.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
