// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cidade-tiradentes","repository":"america","path":"brazil/sao-paulo/cidade-tiradentes","depth":3,"parent":"brazil/sao-paulo","children":["bairro-vila-paulista"]});
export const childModules = Object.freeze({"bairro-vila-paulista":"./bairro-vila-paulista/bairro-vila-paulista.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
