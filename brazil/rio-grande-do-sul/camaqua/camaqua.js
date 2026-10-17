// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"camaqua","repository":"america","path":"brazil/rio-grande-do-sul/camaqua","depth":3,"parent":"brazil/rio-grande-do-sul","children":["vila-assomuca"]});
export const childModules = Object.freeze({"vila-assomuca":"./vila-assomuca/vila-assomuca.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
