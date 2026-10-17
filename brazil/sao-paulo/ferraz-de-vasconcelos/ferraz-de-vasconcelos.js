// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ferraz-de-vasconcelos","repository":"america","path":"brazil/sao-paulo/ferraz-de-vasconcelos","depth":3,"parent":"brazil/sao-paulo","children":["jardim-melillo","jardim-sao-joao"]});
export const childModules = Object.freeze({"jardim-melillo":"./jardim-melillo/jardim-melillo.js","jardim-sao-joao":"./jardim-sao-joao/jardim-sao-joao.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
