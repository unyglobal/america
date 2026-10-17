// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"saint-michael","repository":"america","path":"barbados/saint-michael","depth":2,"parent":"barbados","children":["bridgetown"]});
export const childModules = Object.freeze({"bridgetown":"./bridgetown/bridgetown.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
