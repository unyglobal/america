// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"joao-pessoa","repository":"america","path":"brazil/paraiba/joao-pessoa","depth":3,"parent":"brazil/paraiba","children":["do-riacho","vila-japonesa"]});
export const childModules = Object.freeze({"do-riacho":"./do-riacho/do-riacho.js","vila-japonesa":"./vila-japonesa/vila-japonesa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
