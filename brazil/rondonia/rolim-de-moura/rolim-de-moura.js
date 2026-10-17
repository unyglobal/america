// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rolim-de-moura","repository":"america","path":"brazil/rondonia/rolim-de-moura","depth":3,"parent":"brazil/rondonia","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
