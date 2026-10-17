// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"barbados","repository":"america","path":"barbados","depth":1,"parent":"","children":["saint-michael"]});
export const childModules = Object.freeze({"saint-michael":"./saint-michael/saint-michael.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
