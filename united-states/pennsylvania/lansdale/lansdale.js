// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lansdale","repository":"america","path":"united-states/pennsylvania/lansdale","depth":3,"parent":"united-states/pennsylvania","children":["the-stanbridge-subdivision"]});
export const childModules = Object.freeze({"the-stanbridge-subdivision":"./the-stanbridge-subdivision/the-stanbridge-subdivision.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
