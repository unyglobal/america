// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"estrada","repository":"america","path":"mexico/jalisco/san-francisco-tesistan/estrada","depth":4,"parent":"mexico/jalisco/san-francisco-tesistan","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
