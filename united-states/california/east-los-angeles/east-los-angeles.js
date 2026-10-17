// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"east-los-angeles","repository":"america","path":"united-states/california/east-los-angeles","depth":3,"parent":"united-states/california","children":["belvedere-gardens"]});
export const childModules = Object.freeze({"belvedere-gardens":"./belvedere-gardens/belvedere-gardens.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
