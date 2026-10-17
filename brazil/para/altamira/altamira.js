// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"altamira","repository":"america","path":"brazil/para/altamira","depth":3,"parent":"brazil/para","children":["baixao-do-tufi"]});
export const childModules = Object.freeze({"baixao-do-tufi":"./baixao-do-tufi/baixao-do-tufi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
