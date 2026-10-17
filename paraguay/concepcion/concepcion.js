// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"concepcion","repository":"america","path":"paraguay/concepcion","depth":2,"parent":"paraguay","children":["yby-yau"]});
export const childModules = Object.freeze({"yby-yau":"./yby-yau/yby-yau.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
