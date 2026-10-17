// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sao-leopoldo","repository":"america","path":"brazil/rio-grande-do-sul/sao-leopoldo","depth":3,"parent":"brazil/rio-grande-do-sul","children":["charrua","dos-tocos"]});
export const childModules = Object.freeze({"charrua":"./charrua/charrua.js","dos-tocos":"./dos-tocos/dos-tocos.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
