// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bento-goncalves","repository":"america","path":"brazil/rio-grande-do-sul/bento-goncalves","depth":3,"parent":"brazil/rio-grande-do-sul","children":["pomarosa-ii"]});
export const childModules = Object.freeze({"pomarosa-ii":"./pomarosa-ii/pomarosa-ii.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
