// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nava","repository":"america","path":"mexico/coahuila/nava","depth":3,"parent":"mexico/coahuila","children":["progreso","zona-centro"]});
export const childModules = Object.freeze({"progreso":"./progreso/progreso.js","zona-centro":"./zona-centro/zona-centro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
