// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"magdalena-de-kino","repository":"america","path":"mexico/sonora/magdalena-de-kino","depth":3,"parent":"mexico/sonora","children":["centro","fatima","garcia-barragan","mirasol","san-felipe","san-martin","vista-verde"]});
export const childModules = Object.freeze({"centro":"./centro/centro.js","fatima":"./fatima/fatima.js","garcia-barragan":"./garcia-barragan/garcia-barragan.js","mirasol":"./mirasol/mirasol.js","san-felipe":"./san-felipe/san-felipe.js","san-martin":"./san-martin/san-martin.js","vista-verde":"./vista-verde/vista-verde.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
