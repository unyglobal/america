// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sud-est","repository":"america","path":"haiti/sud-est","depth":2,"parent":"haiti","children":["grand-gosier","jacmel"]});
export const childModules = Object.freeze({"grand-gosier":"./grand-gosier/grand-gosier.js","jacmel":"./jacmel/jacmel.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
