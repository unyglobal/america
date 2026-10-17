// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mayaro","repository":"america","path":"trinidad-and-tobago/mayaro","depth":2,"parent":"trinidad-and-tobago","children":["rio-claro"]});
export const childModules = Object.freeze({"rio-claro":"./rio-claro/rio-claro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
