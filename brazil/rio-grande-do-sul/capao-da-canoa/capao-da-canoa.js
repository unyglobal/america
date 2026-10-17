// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"capao-da-canoa","repository":"america","path":"brazil/rio-grande-do-sul/capao-da-canoa","depth":3,"parent":"brazil/rio-grande-do-sul","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
