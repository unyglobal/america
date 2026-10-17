// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"santa-elena","repository":"america","path":"ecuador/santa-elena","depth":2,"parent":"ecuador","children":["salinas"]});
export const childModules = Object.freeze({"salinas":"./salinas/salinas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
