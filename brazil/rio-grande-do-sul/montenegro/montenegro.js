// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"montenegro","repository":"america","path":"brazil/rio-grande-do-sul/montenegro","depth":3,"parent":"brazil/rio-grande-do-sul","children":["sao-joao"]});
export const childModules = Object.freeze({"sao-joao":"./sao-joao/sao-joao.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
