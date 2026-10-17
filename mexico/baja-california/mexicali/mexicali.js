// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mexicali","repository":"america","path":"mexico/baja-california/mexicali","depth":3,"parent":"mexico/baja-california","children":["maestros-estatales"]});
export const childModules = Object.freeze({"maestros-estatales":"./maestros-estatales/maestros-estatales.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
