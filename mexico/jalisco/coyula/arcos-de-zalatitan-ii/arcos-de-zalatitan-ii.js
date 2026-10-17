// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"arcos-de-zalatitan-ii","repository":"america","path":"mexico/jalisco/coyula/arcos-de-zalatitan-ii","depth":4,"parent":"mexico/jalisco/coyula","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
