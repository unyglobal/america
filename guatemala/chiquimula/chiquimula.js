// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chiquimula","repository":"america","path":"guatemala/chiquimula","depth":2,"parent":"guatemala","children":["esquipulas"]});
export const childModules = Object.freeze({"esquipulas":"./esquipulas/esquipulas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
