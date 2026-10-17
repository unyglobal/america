// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mateus-leme","repository":"america","path":"brazil/minas-gerais/mateus-leme","depth":3,"parent":"brazil/minas-gerais","children":["loteamento-nossa-senhora-aparecida"]});
export const childModules = Object.freeze({"loteamento-nossa-senhora-aparecida":"./loteamento-nossa-senhora-aparecida/loteamento-nossa-senhora-aparecida.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
