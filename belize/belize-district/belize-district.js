// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"belize-district","repository":"america","path":"belize/belize-district","depth":2,"parent":"belize","children":["belize-city","san-pedro"]});
export const childModules = Object.freeze({"belize-city":"./belize-city/belize-city.js","san-pedro":"./san-pedro/san-pedro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
