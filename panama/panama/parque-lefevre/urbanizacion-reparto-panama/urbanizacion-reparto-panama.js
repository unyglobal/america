// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"urbanizacion-reparto-panama","repository":"america","path":"panama/panama/parque-lefevre/urbanizacion-reparto-panama","depth":4,"parent":"panama/panama/parque-lefevre","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
