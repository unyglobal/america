// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bomboli","repository":"america","path":"ecuador/santo-domingo-de-los-tsachilas/santo-domingo-de-los-colorados/bomboli","depth":4,"parent":"ecuador/santo-domingo-de-los-tsachilas/santo-domingo-de-los-colorados","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
