// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pomarosa-ii","repository":"america","path":"brazil/rio-grande-do-sul/bento-goncalves/pomarosa-ii","depth":4,"parent":"brazil/rio-grande-do-sul/bento-goncalves","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
