// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"las-pintas-de-arriba","repository":"america","path":"mexico/jalisco/las-pintas-de-arriba","depth":3,"parent":"mexico/jalisco","children":["granjitas","pacifico"]});
export const childModules = Object.freeze({"granjitas":"./granjitas/granjitas.js","pacifico":"./pacifico/pacifico.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
