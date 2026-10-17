// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"la-gomera","repository":"america","path":"guatemala/escuintla/la-gomera","depth":3,"parent":"guatemala/escuintla","children":["colonia-la-condesa"]});
export const childModules = Object.freeze({"colonia-la-condesa":"./colonia-la-condesa/colonia-la-condesa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
