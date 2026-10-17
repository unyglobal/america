// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bolivar","repository":"america","path":"ecuador/bolivar","depth":2,"parent":"ecuador","children":["guaranda"]});
export const childModules = Object.freeze({"guaranda":"./guaranda/guaranda.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
