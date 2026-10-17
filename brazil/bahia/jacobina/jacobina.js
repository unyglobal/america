// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jacobina","repository":"america","path":"brazil/bahia/jacobina","depth":3,"parent":"brazil/bahia","children":["caixa-d-atua","centro","leader","missao"]});
export const childModules = Object.freeze({"caixa-d-atua":"./caixa-d-atua/caixa-d-atua.js","centro":"./centro/centro.js","leader":"./leader/leader.js","missao":"./missao/missao.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
