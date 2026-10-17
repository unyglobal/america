// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"leon-department","repository":"america","path":"nicaragua/leon-department","depth":2,"parent":"nicaragua","children":["la-paz-centro","leon","nagarote"]});
export const childModules = Object.freeze({"la-paz-centro":"./la-paz-centro/la-paz-centro.js","leon":"./leon/leon.js","nagarote":"./nagarote/nagarote.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
