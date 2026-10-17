// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"esperanza","repository":"america","path":"mexico/sonora/esperanza","depth":3,"parent":"mexico/sonora","children":["buena-vista","hogar-y-patrimonio","luis-antillon"]});
export const childModules = Object.freeze({"buena-vista":"./buena-vista/buena-vista.js","hogar-y-patrimonio":"./hogar-y-patrimonio/hogar-y-patrimonio.js","luis-antillon":"./luis-antillon/luis-antillon.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
