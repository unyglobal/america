// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"park-slope","repository":"america","path":"united-states/new-york/park-slope","depth":3,"parent":"united-states/new-york","children":["gowanus"]});
export const childModules = Object.freeze({"gowanus":"./gowanus/gowanus.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
