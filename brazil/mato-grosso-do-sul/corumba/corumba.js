// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"corumba","repository":"america","path":"brazil/mato-grosso-do-sul/corumba","depth":3,"parent":"brazil/mato-grosso-do-sul","children":["centro-corumba"]});
export const childModules = Object.freeze({"centro-corumba":"./centro-corumba/centro-corumba.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
