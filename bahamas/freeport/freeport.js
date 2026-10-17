// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"freeport","repository":"america","path":"bahamas/freeport","depth":2,"parent":"bahamas","children":["lucaya"]});
export const childModules = Object.freeze({"lucaya":"./lucaya/lucaya.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
