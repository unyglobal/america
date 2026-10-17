// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tibau-do-sul","repository":"america","path":"brazil/rio-grande-do-norte/tibau-do-sul","depth":3,"parent":"brazil/rio-grande-do-norte","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
