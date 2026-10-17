// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sao-bernardo-do-campo","repository":"america","path":"brazil/sao-paulo/sao-bernardo-do-campo","depth":3,"parent":"brazil/sao-paulo","children":["vila-armando-bondioli"]});
export const childModules = Object.freeze({"vila-armando-bondioli":"./vila-armando-bondioli/vila-armando-bondioli.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
