// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nueva-rosita","repository":"america","path":"mexico/coahuila/nueva-rosita","depth":3,"parent":"mexico/coahuila","children":["chapultepec","comercial","davila-moncada","nuevo-leon","roma","zaragoza"]});
export const childModules = Object.freeze({"chapultepec":"./chapultepec/chapultepec.js","comercial":"./comercial/comercial.js","davila-moncada":"./davila-moncada/davila-moncada.js","nuevo-leon":"./nuevo-leon/nuevo-leon.js","roma":"./roma/roma.js","zaragoza":"./zaragoza/zaragoza.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
