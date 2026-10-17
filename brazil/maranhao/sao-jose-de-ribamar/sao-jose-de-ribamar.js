// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sao-jose-de-ribamar","repository":"america","path":"brazil/maranhao/sao-jose-de-ribamar","depth":3,"parent":"brazil/maranhao","children":["vila-alcione-ferreira"]});
export const childModules = Object.freeze({"vila-alcione-ferreira":"./vila-alcione-ferreira/vila-alcione-ferreira.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
