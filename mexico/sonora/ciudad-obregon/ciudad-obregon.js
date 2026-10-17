// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ciudad-obregon","repository":"america","path":"mexico/sonora/ciudad-obregon","depth":3,"parent":"mexico/sonora","children":["hidalgo","la-cortina-i-seccion"]});
export const childModules = Object.freeze({"hidalgo":"./hidalgo/hidalgo.js","la-cortina-i-seccion":"./la-cortina-i-seccion/la-cortina-i-seccion.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
