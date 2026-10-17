// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"elizabeth-city","repository":"america","path":"united-states/north-carolina/elizabeth-city","depth":3,"parent":"united-states/north-carolina","children":["chapell-gardens","oxford-heights","ulster-gardens"]});
export const childModules = Object.freeze({"chapell-gardens":"./chapell-gardens/chapell-gardens.js","oxford-heights":"./oxford-heights/oxford-heights.js","ulster-gardens":"./ulster-gardens/ulster-gardens.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
