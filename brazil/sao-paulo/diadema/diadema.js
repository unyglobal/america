// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"diadema","repository":"america","path":"brazil/sao-paulo/diadema","depth":3,"parent":"brazil/sao-paulo","children":["vila-mulford"]});
export const childModules = Object.freeze({"vila-mulford":"./vila-mulford/vila-mulford.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
