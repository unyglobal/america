// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"clarendon","repository":"america","path":"jamaica/clarendon","depth":2,"parent":"jamaica","children":["may-pen"]});
export const childModules = Object.freeze({"may-pen":"./may-pen/may-pen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
