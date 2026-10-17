// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"guaiba","repository":"america","path":"brazil/rio-grande-do-sul/guaiba","depth":3,"parent":"brazil/rio-grande-do-sul","children":["vila-da-alegria"]});
export const childModules = Object.freeze({"vila-da-alegria":"./vila-da-alegria/vila-da-alegria.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
