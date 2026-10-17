// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"itanhaem","repository":"america","path":"brazil/sao-paulo/itanhaem","depth":3,"parent":"brazil/sao-paulo","children":["vila-ivoty","vila-sao-paulo"]});
export const childModules = Object.freeze({"vila-ivoty":"./vila-ivoty/vila-ivoty.js","vila-sao-paulo":"./vila-sao-paulo/vila-sao-paulo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
