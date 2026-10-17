// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"embu-das-artes","repository":"america","path":"brazil/sao-paulo/embu-das-artes","depth":3,"parent":"brazil/sao-paulo","children":["bairro-jardim-mascarenhas","jardim-novo-embu","jardim-silva"]});
export const childModules = Object.freeze({"bairro-jardim-mascarenhas":"./bairro-jardim-mascarenhas/bairro-jardim-mascarenhas.js","jardim-novo-embu":"./jardim-novo-embu/jardim-novo-embu.js","jardim-silva":"./jardim-silva/jardim-silva.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
