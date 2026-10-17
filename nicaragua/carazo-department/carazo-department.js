// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"carazo-department","repository":"america","path":"nicaragua/carazo-department","depth":2,"parent":"nicaragua","children":["diriamba","jinotepe","san-marcos"]});
export const childModules = Object.freeze({"diriamba":"./diriamba/diriamba.js","jinotepe":"./jinotepe/jinotepe.js","san-marcos":"./san-marcos/san-marcos.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
