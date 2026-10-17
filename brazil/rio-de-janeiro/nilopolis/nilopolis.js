// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nilopolis","repository":"america","path":"brazil/rio-de-janeiro/nilopolis","depth":3,"parent":"brazil/rio-de-janeiro","children":["cabuis"]});
export const childModules = Object.freeze({"cabuis":"./cabuis/cabuis.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
