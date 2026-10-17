// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"braganca-paulista","repository":"america","path":"brazil/sao-paulo/braganca-paulista","depth":3,"parent":"brazil/sao-paulo","children":["centro","lavapes","vila-mun"]});
export const childModules = Object.freeze({"centro":"./centro/centro.js","lavapes":"./lavapes/lavapes.js","vila-mun":"./vila-mun/vila-mun.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
