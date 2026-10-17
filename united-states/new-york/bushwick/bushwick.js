// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bushwick","repository":"america","path":"united-states/new-york/bushwick","depth":3,"parent":"united-states/new-york","children":["wyckoff-heights"]});
export const childModules = Object.freeze({"wyckoff-heights":"./wyckoff-heights/wyckoff-heights.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
