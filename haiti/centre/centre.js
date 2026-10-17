// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"centre","repository":"america","path":"haiti/centre","depth":2,"parent":"haiti","children":["hinche"]});
export const childModules = Object.freeze({"hinche":"./hinche/hinche.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
