// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"primeira-cruz","repository":"america","path":"brazil/maranhao/primeira-cruz","depth":3,"parent":"brazil/maranhao","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
