// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"biritiba-mirim","repository":"america","path":"brazil/sao-paulo/biritiba-mirim","depth":3,"parent":"brazil/sao-paulo","children":["jardim-yoneda","vila-operaria"]});
export const childModules = Object.freeze({"jardim-yoneda":"./jardim-yoneda/jardim-yoneda.js","vila-operaria":"./vila-operaria/vila-operaria.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
