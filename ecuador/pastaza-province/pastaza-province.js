// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pastaza-province","repository":"america","path":"ecuador/pastaza-province","depth":2,"parent":"ecuador","children":["puyo"]});
export const childModules = Object.freeze({"puyo":"./puyo/puyo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
