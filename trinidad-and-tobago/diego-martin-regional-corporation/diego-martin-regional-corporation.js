// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"diego-martin-regional-corporation","repository":"america","path":"trinidad-and-tobago/diego-martin-regional-corporation","depth":2,"parent":"trinidad-and-tobago","children":["diego-martin"]});
export const childModules = Object.freeze({"diego-martin":"./diego-martin/diego-martin.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
