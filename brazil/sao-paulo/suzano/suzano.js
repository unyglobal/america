// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"suzano","repository":"america","path":"brazil/sao-paulo/suzano","depth":3,"parent":"brazil/sao-paulo","children":["cruzeiro-do-sul"]});
export const childModules = Object.freeze({"cruzeiro-do-sul":"./cruzeiro-do-sul/cruzeiro-do-sul.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
