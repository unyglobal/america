// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"florianopolis","repository":"america","path":"brazil/santa-catarina/florianopolis","depth":3,"parent":"brazil/santa-catarina","children":["morro-mariquinha"]});
export const childModules = Object.freeze({"morro-mariquinha":"./morro-mariquinha/morro-mariquinha.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
