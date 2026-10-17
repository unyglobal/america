// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bahamas","repository":"america","path":"bahamas","depth":1,"parent":"","children":["freeport","new-providence"]});
export const childModules = Object.freeze({"freeport":"./freeport/freeport.js","new-providence":"./new-providence/new-providence.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
