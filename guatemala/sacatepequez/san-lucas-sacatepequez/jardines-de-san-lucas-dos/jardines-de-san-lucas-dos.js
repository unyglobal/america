// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jardines-de-san-lucas-dos","repository":"america","path":"guatemala/sacatepequez/san-lucas-sacatepequez/jardines-de-san-lucas-dos","depth":4,"parent":"guatemala/sacatepequez/san-lucas-sacatepequez","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
