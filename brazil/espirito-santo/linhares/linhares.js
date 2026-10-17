// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"linhares","repository":"america","path":"brazil/espirito-santo/linhares","depth":3,"parent":"brazil/espirito-santo","children":["vila-capixaba"]});
export const childModules = Object.freeze({"vila-capixaba":"./vila-capixaba/vila-capixaba.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
