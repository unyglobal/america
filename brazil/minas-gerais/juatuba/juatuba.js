// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"juatuba","repository":"america","path":"brazil/minas-gerais/juatuba","depth":3,"parent":"brazil/minas-gerais","children":["loteamento-cidade-satelite"]});
export const childModules = Object.freeze({"loteamento-cidade-satelite":"./loteamento-cidade-satelite/loteamento-cidade-satelite.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
