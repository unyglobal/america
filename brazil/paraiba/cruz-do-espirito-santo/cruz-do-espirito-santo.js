// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cruz-do-espirito-santo","repository":"america","path":"brazil/paraiba/cruz-do-espirito-santo","depth":3,"parent":"brazil/paraiba","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
