// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mentor","repository":"america","path":"united-states/ohio/mentor","depth":3,"parent":"united-states/ohio","children":["hart-place","morningside"]});
export const childModules = Object.freeze({"hart-place":"./hart-place/hart-place.js","morningside":"./morningside/morningside.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
