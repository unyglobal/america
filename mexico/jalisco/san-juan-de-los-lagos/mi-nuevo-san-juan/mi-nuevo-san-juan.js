// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mi-nuevo-san-juan","repository":"america","path":"mexico/jalisco/san-juan-de-los-lagos/mi-nuevo-san-juan","depth":4,"parent":"mexico/jalisco/san-juan-de-los-lagos","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
