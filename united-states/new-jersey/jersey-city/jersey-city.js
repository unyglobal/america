// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jersey-city","repository":"america","path":"united-states/new-jersey/jersey-city","depth":3,"parent":"united-states/new-jersey","children":["marion"]});
export const childModules = Object.freeze({"marion":"./marion/marion.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
