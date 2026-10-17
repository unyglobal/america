// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"summerville","repository":"america","path":"united-states/south-carolina/summerville","depth":3,"parent":"united-states/south-carolina","children":["challendon"]});
export const childModules = Object.freeze({"challendon":"./challendon/challendon.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
