// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"beira-rio","repository":"america","path":"brazil/pernambuco/moreno/beira-rio","depth":4,"parent":"brazil/pernambuco/moreno","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
