// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"statesville","repository":"america","path":"united-states/north-carolina/statesville","depth":3,"parent":"united-states/north-carolina","children":["cloverdale"]});
export const childModules = Object.freeze({"cloverdale":"./cloverdale/cloverdale.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
