// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"villa-canales","repository":"america","path":"guatemala/guatemala/villa-canales","depth":3,"parent":"guatemala/guatemala","children":["colonia-dona-delfina"]});
export const childModules = Object.freeze({"colonia-dona-delfina":"./colonia-dona-delfina/colonia-dona-delfina.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
