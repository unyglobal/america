// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"willoughby","repository":"america","path":"united-states/ohio/willoughby","depth":3,"parent":"united-states/ohio","children":["st-john-s-bluff","valley-gardens"]});
export const childModules = Object.freeze({"st-john-s-bluff":"./st-john-s-bluff/st-john-s-bluff.js","valley-gardens":"./valley-gardens/valley-gardens.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
