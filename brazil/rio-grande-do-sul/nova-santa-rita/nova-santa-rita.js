// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nova-santa-rita","repository":"america","path":"brazil/rio-grande-do-sul/nova-santa-rita","depth":3,"parent":"brazil/rio-grande-do-sul","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
