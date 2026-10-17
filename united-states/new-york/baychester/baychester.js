// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"baychester","repository":"america","path":"united-states/new-york/baychester","depth":3,"parent":"united-states/new-york","children":["co-op-city"]});
export const childModules = Object.freeze({"co-op-city":"./co-op-city/co-op-city.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
