// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vila-esperanca-alto-da-nacao","repository":"america","path":"brazil/pernambuco/olinda/vila-esperanca-alto-da-nacao","depth":4,"parent":"brazil/pernambuco/olinda","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
