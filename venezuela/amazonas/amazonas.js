// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"amazonas","repository":"america","path":"venezuela/amazonas","depth":2,"parent":"venezuela","children":["puerto-ayacucho"]});
export const childModules = Object.freeze({"puerto-ayacucho":"./puerto-ayacucho/puerto-ayacucho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
