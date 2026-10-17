// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"torreon","repository":"america","path":"mexico/coahuila/torreon","depth":3,"parent":"mexico/coahuila","children":["cuarto-de-cobian-centro","moctezuma","nuevo-torreon","san-marcos"]});
export const childModules = Object.freeze({"cuarto-de-cobian-centro":"./cuarto-de-cobian-centro/cuarto-de-cobian-centro.js","moctezuma":"./moctezuma/moctezuma.js","nuevo-torreon":"./nuevo-torreon/nuevo-torreon.js","san-marcos":"./san-marcos/san-marcos.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
