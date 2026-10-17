// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vila-prudente","repository":"america","path":"brazil/sao-paulo/vila-prudente","depth":3,"parent":"brazil/sao-paulo","children":["vila-alois","vila-alpina","vila-lucia"]});
export const childModules = Object.freeze({"vila-alois":"./vila-alois/vila-alois.js","vila-alpina":"./vila-alpina/vila-alpina.js","vila-lucia":"./vila-lucia/vila-lucia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
