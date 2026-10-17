// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"campina-grande","repository":"america","path":"brazil/paraiba/campina-grande","depth":3,"parent":"brazil/paraiba","children":["estacao-velha"]});
export const childModules = Object.freeze({"estacao-velha":"./estacao-velha/estacao-velha.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
