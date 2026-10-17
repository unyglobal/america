// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vila-alcione-ferreira","repository":"america","path":"brazil/maranhao/sao-jose-de-ribamar/vila-alcione-ferreira","depth":4,"parent":"brazil/maranhao/sao-jose-de-ribamar","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
