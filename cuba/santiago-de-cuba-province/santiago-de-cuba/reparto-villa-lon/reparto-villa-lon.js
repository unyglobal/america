// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"reparto-villa-lon","repository":"america","path":"cuba/santiago-de-cuba-province/santiago-de-cuba/reparto-villa-lon","depth":4,"parent":"cuba/santiago-de-cuba-province/santiago-de-cuba","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
