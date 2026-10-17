// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"goose-creek","repository":"america","path":"united-states/south-carolina/goose-creek","depth":3,"parent":"united-states/south-carolina","children":["goose-creek-heights","highlands","the-oaks"]});
export const childModules = Object.freeze({"goose-creek-heights":"./goose-creek-heights/goose-creek-heights.js","highlands":"./highlands/highlands.js","the-oaks":"./the-oaks/the-oaks.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
