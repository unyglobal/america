// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tzanjay","repository":"america","path":"guatemala/chimaltenango/patzicia/tzanjay","depth":4,"parent":"guatemala/chimaltenango/patzicia","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
