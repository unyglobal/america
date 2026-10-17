// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"southglenn","repository":"america","path":"united-states/colorado/southglenn","depth":3,"parent":"united-states/colorado","children":["cherry-knolls","southglenn-historical"]});
export const childModules = Object.freeze({"cherry-knolls":"./cherry-knolls/cherry-knolls.js","southglenn-historical":"./southglenn-historical/southglenn-historical.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
