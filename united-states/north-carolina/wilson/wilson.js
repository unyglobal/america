// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"wilson","repository":"america","path":"united-states/north-carolina/wilson","depth":3,"parent":"united-states/north-carolina","children":["hominy-heights","whitfield-homes"]});
export const childModules = Object.freeze({"hominy-heights":"./hominy-heights/hominy-heights.js","whitfield-homes":"./whitfield-homes/whitfield-homes.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
