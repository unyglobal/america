// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tecoman","repository":"america","path":"mexico/colima/tecoman","depth":3,"parent":"mexico/colima","children":["centro","emiliano-zapata","infonavit-las-huertas","residencial-del-valle","union"]});
export const childModules = Object.freeze({"centro":"./centro/centro.js","emiliano-zapata":"./emiliano-zapata/emiliano-zapata.js","infonavit-las-huertas":"./infonavit-las-huertas/infonavit-las-huertas.js","residencial-del-valle":"./residencial-del-valle/residencial-del-valle.js","union":"./union/union.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
