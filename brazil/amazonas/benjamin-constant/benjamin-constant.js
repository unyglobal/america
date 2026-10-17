// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"benjamin-constant","repository":"america","path":"brazil/amazonas/benjamin-constant","depth":3,"parent":"brazil/amazonas","children":["javarizinho"]});
export const childModules = Object.freeze({"javarizinho":"./javarizinho/javarizinho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
