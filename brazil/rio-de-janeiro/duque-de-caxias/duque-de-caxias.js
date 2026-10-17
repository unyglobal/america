// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"duque-de-caxias","repository":"america","path":"brazil/rio-de-janeiro/duque-de-caxias","depth":3,"parent":"brazil/rio-de-janeiro","children":["vila-meriti"]});
export const childModules = Object.freeze({"vila-meriti":"./vila-meriti/vila-meriti.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
