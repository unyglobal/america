// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dos-tocos","repository":"america","path":"brazil/rio-grande-do-sul/sao-leopoldo/dos-tocos","depth":4,"parent":"brazil/rio-grande-do-sul/sao-leopoldo","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
