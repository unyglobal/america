// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lotificacion-del-rio-premier","repository":"america","path":"guatemala/suchitepeque/san-francisco-zapotitlan/lotificacion-del-rio-premier","depth":4,"parent":"guatemala/suchitepeque/san-francisco-zapotitlan","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
