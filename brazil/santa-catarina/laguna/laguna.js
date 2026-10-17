// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"laguna","repository":"america","path":"brazil/santa-catarina/laguna","depth":3,"parent":"brazil/santa-catarina","children":["morro-da-gloria"]});
export const childModules = Object.freeze({"morro-da-gloria":"./morro-da-gloria/morro-da-gloria.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
