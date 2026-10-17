// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"la-cortina-i-seccion","repository":"america","path":"mexico/sonora/ciudad-obregon/la-cortina-i-seccion","depth":4,"parent":"mexico/sonora/ciudad-obregon","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
