// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cidade-ademar","repository":"america","path":"brazil/sao-paulo/cidade-ademar","depth":3,"parent":"brazil/sao-paulo","children":["americanopolis","jardim-consorcio","vila-imperio","vila-missionaria"]});
export const childModules = Object.freeze({"americanopolis":"./americanopolis/americanopolis.js","jardim-consorcio":"./jardim-consorcio/jardim-consorcio.js","vila-imperio":"./vila-imperio/vila-imperio.js","vila-missionaria":"./vila-missionaria/vila-missionaria.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
