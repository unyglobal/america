// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"piracaia","repository":"america","path":"brazil/sao-paulo/piracaia","depth":3,"parent":"brazil/sao-paulo","children":["cruzeiro"]});
export const childModules = Object.freeze({"cruzeiro":"./cruzeiro/cruzeiro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
