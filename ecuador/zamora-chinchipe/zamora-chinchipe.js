// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zamora-chinchipe","repository":"america","path":"ecuador/zamora-chinchipe","depth":2,"parent":"ecuador","children":["zamora"]});
export const childModules = Object.freeze({"zamora":"./zamora/zamora.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
