// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"plant-city","repository":"america","path":"united-states/florida/plant-city","depth":3,"parent":"united-states/florida","children":["east-side","gibson-terrace","north-gibson-terrace","palm-heights","washington-park"]});
export const childModules = Object.freeze({"east-side":"./east-side/east-side.js","gibson-terrace":"./gibson-terrace/gibson-terrace.js","north-gibson-terrace":"./north-gibson-terrace/north-gibson-terrace.js","palm-heights":"./palm-heights/palm-heights.js","washington-park":"./washington-park/washington-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
