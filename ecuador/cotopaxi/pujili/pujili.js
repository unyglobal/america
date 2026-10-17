// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pujili","repository":"america","path":"ecuador/cotopaxi/pujili","depth":3,"parent":"ecuador/cotopaxi","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
