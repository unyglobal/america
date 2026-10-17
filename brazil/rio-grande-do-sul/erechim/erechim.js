// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"erechim","repository":"america","path":"brazil/rio-grande-do-sul/erechim","depth":3,"parent":"brazil/rio-grande-do-sul","children":["centro"]});
export const childModules = Object.freeze({"centro":"./centro/centro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
