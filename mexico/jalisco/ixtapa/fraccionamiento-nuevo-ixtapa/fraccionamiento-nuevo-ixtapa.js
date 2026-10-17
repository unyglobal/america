// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fraccionamiento-nuevo-ixtapa","repository":"america","path":"mexico/jalisco/ixtapa/fraccionamiento-nuevo-ixtapa","depth":4,"parent":"mexico/jalisco/ixtapa","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
