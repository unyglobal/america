// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"igarassu","repository":"america","path":"brazil/pernambuco/igarassu","depth":3,"parent":"brazil/pernambuco","children":["vila-alegre"]});
export const childModules = Object.freeze({"vila-alegre":"./vila-alegre/vila-alegre.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
