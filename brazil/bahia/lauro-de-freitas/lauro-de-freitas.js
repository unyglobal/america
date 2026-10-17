// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lauro-de-freitas","repository":"america","path":"brazil/bahia/lauro-de-freitas","depth":3,"parent":"brazil/bahia","children":["centro","diamante","loteamento-salvador","perola-negra","recreio-ipitanga","santa-terezinha"]});
export const childModules = Object.freeze({"centro":"./centro/centro.js","diamante":"./diamante/diamante.js","loteamento-salvador":"./loteamento-salvador/loteamento-salvador.js","perola-negra":"./perola-negra/perola-negra.js","recreio-ipitanga":"./recreio-ipitanga/recreio-ipitanga.js","santa-terezinha":"./santa-terezinha/santa-terezinha.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
