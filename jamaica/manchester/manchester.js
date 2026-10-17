// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"manchester","repository":"america","path":"jamaica/manchester","depth":2,"parent":"jamaica","children":["mandeville"]});
export const childModules = Object.freeze({"mandeville":"./mandeville/mandeville.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
