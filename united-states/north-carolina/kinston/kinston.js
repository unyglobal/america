// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kinston","repository":"america","path":"united-states/north-carolina/kinston","depth":3,"parent":"united-states/north-carolina","children":["george-washington-carver"]});
export const childModules = Object.freeze({"george-washington-carver":"./george-washington-carver/george-washington-carver.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
