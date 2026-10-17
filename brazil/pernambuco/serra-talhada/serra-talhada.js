// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"serra-talhada","repository":"america","path":"brazil/pernambuco/serra-talhada","depth":3,"parent":"brazil/pernambuco","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
