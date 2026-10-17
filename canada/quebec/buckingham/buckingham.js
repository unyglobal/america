// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"buckingham","repository":"america","path":"canada/quebec/buckingham","depth":3,"parent":"canada/quebec","children":["beauchampville"]});
export const childModules = Object.freeze({"beauchampville":"./beauchampville/beauchampville.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
