// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chimborazo-province","repository":"america","path":"ecuador/chimborazo-province","depth":2,"parent":"ecuador","children":["riobamba"]});
export const childModules = Object.freeze({"riobamba":"./riobamba/riobamba.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
