// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"limeira","repository":"america","path":"brazil/sao-paulo/limeira","depth":3,"parent":"brazil/sao-paulo","children":["vila-sao-cristovao","vila-sao-joao"]});
export const childModules = Object.freeze({"vila-sao-cristovao":"./vila-sao-cristovao/vila-sao-cristovao.js","vila-sao-joao":"./vila-sao-joao/vila-sao-joao.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
