// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"barra-dos-coqueiros","repository":"america","path":"brazil/sergipe/barra-dos-coqueiros","depth":3,"parent":"brazil/sergipe","children":["canal-do-guaxinim"]});
export const childModules = Object.freeze({"canal-do-guaxinim":"./canal-do-guaxinim/canal-do-guaxinim.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
