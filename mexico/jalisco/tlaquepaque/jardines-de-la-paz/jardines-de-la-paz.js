// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jardines-de-la-paz","repository":"america","path":"mexico/jalisco/tlaquepaque/jardines-de-la-paz","depth":4,"parent":"mexico/jalisco/tlaquepaque","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
