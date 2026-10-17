// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"boyeros","repository":"america","path":"cuba/havana/boyeros","depth":3,"parent":"cuba/havana","children":["abel-santamaria","baluarte"]});
export const childModules = Object.freeze({"abel-santamaria":"./abel-santamaria/abel-santamaria.js","baluarte":"./baluarte/baluarte.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
