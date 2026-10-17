// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"drouillard","repository":"america","path":"haiti/ouest/cite-soleil/drouillard","depth":4,"parent":"haiti/ouest/cite-soleil","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
