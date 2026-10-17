// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"la-villa-del-rosario","repository":"america","path":"venezuela/zulia/la-villa-del-rosario","depth":3,"parent":"venezuela/zulia","children":["corito","la-aurora"]});
export const childModules = Object.freeze({"corito":"./corito/corito.js","la-aurora":"./la-aurora/la-aurora.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
