// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cristalina","repository":"america","path":"brazil/goias/cristalina","depth":3,"parent":"brazil/goias","children":["centro","jardm-planalto"]});
export const childModules = Object.freeze({"centro":"./centro/centro.js","jardm-planalto":"./jardm-planalto/jardm-planalto.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
