// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vila-andrade","repository":"america","path":"brazil/sao-paulo/vila-andrade","depth":3,"parent":"brazil/sao-paulo","children":["jardim-fonte-do-morumbi"]});
export const childModules = Object.freeze({"jardim-fonte-do-morumbi":"./jardim-fonte-do-morumbi/jardim-fonte-do-morumbi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
