// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pacifico","repository":"america","path":"mexico/jalisco/las-pintas-de-arriba/pacifico","depth":4,"parent":"mexico/jalisco/las-pintas-de-arriba","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
