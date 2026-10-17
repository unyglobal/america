// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"marietta","repository":"america","path":"united-states/georgia/marietta","depth":3,"parent":"united-states/georgia","children":["clay-homes","fort-hill-homes"]});
export const childModules = Object.freeze({"clay-homes":"./clay-homes/clay-homes.js","fort-hill-homes":"./fort-hill-homes/fort-hill-homes.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
