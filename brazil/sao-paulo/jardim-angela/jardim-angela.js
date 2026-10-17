// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jardim-angela","repository":"america","path":"brazil/sao-paulo/jardim-angela","depth":3,"parent":"brazil/sao-paulo","children":["bairro-jardim-aracati","bairro-parque-do-lago"]});
export const childModules = Object.freeze({"bairro-jardim-aracati":"./bairro-jardim-aracati/bairro-jardim-aracati.js","bairro-parque-do-lago":"./bairro-parque-do-lago/bairro-parque-do-lago.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
