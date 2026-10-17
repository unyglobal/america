// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"saint-lucia","repository":"america","path":"saint-lucia","depth":1,"parent":"","children":["castries","gros-islet"]});
export const childModules = Object.freeze({"castries":"./castries/castries.js","gros-islet":"./gros-islet/gros-islet.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
