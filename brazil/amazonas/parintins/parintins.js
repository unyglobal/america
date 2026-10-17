// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"parintins","repository":"america","path":"brazil/amazonas/parintins","depth":3,"parent":"brazil/amazonas","children":["beco-do-bagaco","beco-submarino"]});
export const childModules = Object.freeze({"beco-do-bagaco":"./beco-do-bagaco/beco-do-bagaco.js","beco-submarino":"./beco-submarino/beco-submarino.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
