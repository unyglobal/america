// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sucumbios","repository":"america","path":"ecuador/sucumbios","depth":2,"parent":"ecuador","children":["nueva-loja"]});
export const childModules = Object.freeze({"nueva-loja":"./nueva-loja/nueva-loja.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
