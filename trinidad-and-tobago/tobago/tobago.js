// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tobago","repository":"america","path":"trinidad-and-tobago/tobago","depth":2,"parent":"trinidad-and-tobago","children":["scarborough"]});
export const childModules = Object.freeze({"scarborough":"./scarborough/scarborough.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
