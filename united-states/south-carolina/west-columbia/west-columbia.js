// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"west-columbia","repository":"america","path":"united-states/south-carolina/west-columbia","depth":3,"parent":"united-states/south-carolina","children":["park-place-west"]});
export const childModules = Object.freeze({"park-place-west":"./park-place-west/park-place-west.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
