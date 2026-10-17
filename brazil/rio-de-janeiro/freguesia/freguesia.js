// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"freguesia","repository":"america","path":"brazil/rio-de-janeiro/freguesia","depth":3,"parent":"brazil/rio-de-janeiro","children":["bananal","pichunas"]});
export const childModules = Object.freeze({"bananal":"./bananal/bananal.js","pichunas":"./pichunas/pichunas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
