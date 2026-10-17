// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"carchi","repository":"america","path":"ecuador/carchi","depth":2,"parent":"ecuador","children":["tulcan"]});
export const childModules = Object.freeze({"tulcan":"./tulcan/tulcan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
