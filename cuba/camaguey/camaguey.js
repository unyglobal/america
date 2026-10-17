// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"camaguey","repository":"america","path":"cuba/camaguey","depth":2,"parent":"cuba","children":["esmeralda","florida","guaimaro","jimaguayu","minas","nuevitas","santa-cruz-del-sur","sibanicu","vertientes"]});
export const childModules = Object.freeze({"esmeralda":"./esmeralda/esmeralda.js","florida":"./florida/florida.js","guaimaro":"./guaimaro/guaimaro.js","jimaguayu":"./jimaguayu/jimaguayu.js","minas":"./minas/minas.js","nuevitas":"./nuevitas/nuevitas.js","santa-cruz-del-sur":"./santa-cruz-del-sur/santa-cruz-del-sur.js","sibanicu":"./sibanicu/sibanicu.js","vertientes":"./vertientes/vertientes.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
