// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-luis-rio-colorado","repository":"america","path":"mexico/sonora/san-luis-rio-colorado","depth":3,"parent":"mexico/sonora","children":["jalisco"]});
export const childModules = Object.freeze({"jalisco":"./jalisco/jalisco.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
