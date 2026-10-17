// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"manhumirim","repository":"america","path":"brazil/minas-gerais/manhumirim","depth":3,"parent":"brazil/minas-gerais","children":["bairro-da-mangueira"]});
export const childModules = Object.freeze({"bairro-da-mangueira":"./bairro-da-mangueira/bairro-da-mangueira.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
