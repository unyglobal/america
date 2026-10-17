// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"porto-alegre","repository":"america","path":"brazil/rio-grande-do-sul/porto-alegre","depth":3,"parent":"brazil/rio-grande-do-sul","children":["centro-historico","chocolatao"]});
export const childModules = Object.freeze({"centro-historico":"./centro-historico/centro-historico.js","chocolatao":"./chocolatao/chocolatao.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
