// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"grand-anse","repository":"america","path":"haiti/grand-anse","depth":2,"parent":"haiti","children":["jeremie"]});
export const childModules = Object.freeze({"jeremie":"./jeremie/jeremie.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
