// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zacapa","repository":"america","path":"guatemala/zacapa","depth":2,"parent":"guatemala","children":["gualan"]});
export const childModules = Object.freeze({"gualan":"./gualan/gualan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
