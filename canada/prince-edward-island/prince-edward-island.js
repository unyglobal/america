// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"prince-edward-island","repository":"america","path":"canada/prince-edward-island","depth":2,"parent":"canada","children":["charlottetown"]});
export const childModules = Object.freeze({"charlottetown":"./charlottetown/charlottetown.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
