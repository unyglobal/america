// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"anhanguera","repository":"america","path":"brazil/sao-paulo/anhanguera","depth":3,"parent":"brazil/sao-paulo","children":["bairro-jardim-britania","bairro-jardim-santa-fe","bairro-parque-nova-anhanguera","bairro-vila-jaragua"]});
export const childModules = Object.freeze({"bairro-jardim-britania":"./bairro-jardim-britania/bairro-jardim-britania.js","bairro-jardim-santa-fe":"./bairro-jardim-santa-fe/bairro-jardim-santa-fe.js","bairro-parque-nova-anhanguera":"./bairro-parque-nova-anhanguera/bairro-parque-nova-anhanguera.js","bairro-vila-jaragua":"./bairro-vila-jaragua/bairro-vila-jaragua.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
