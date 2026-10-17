// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sangre-grande-regional-corporation","repository":"america","path":"trinidad-and-tobago/sangre-grande-regional-corporation","depth":2,"parent":"trinidad-and-tobago","children":["sangre-grande"]});
export const childModules = Object.freeze({"sangre-grande":"./sangre-grande/sangre-grande.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
