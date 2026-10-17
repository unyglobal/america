// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"barrio-paraiba-do-sul","repository":"america","path":"brazil/rio-de-janeiro/paraiba-do-sul/barrio-paraiba-do-sul","depth":4,"parent":"brazil/rio-de-janeiro/paraiba-do-sul","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
