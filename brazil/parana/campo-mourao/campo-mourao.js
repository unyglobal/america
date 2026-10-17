// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"campo-mourao","repository":"america","path":"brazil/parana/campo-mourao","depth":3,"parent":"brazil/parana","children":["bela-vista","jardim-laura","jardim-p-campo"]});
export const childModules = Object.freeze({"bela-vista":"./bela-vista/bela-vista.js","jardim-laura":"./jardim-laura/jardim-laura.js","jardim-p-campo":"./jardim-p-campo/jardim-p-campo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
