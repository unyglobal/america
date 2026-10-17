// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"charlottetown","repository":"america","path":"canada/prince-edward-island/charlottetown","depth":3,"parent":"canada/prince-edward-island","children":["downtown-charlottetown"]});
export const childModules = Object.freeze({"downtown-charlottetown":"./downtown-charlottetown/downtown-charlottetown.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
