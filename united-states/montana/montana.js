// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"montana","repository":"america","path":"united-states/montana","depth":2,"parent":"united-states","children":["billings","bozeman","butte","kalispell","missoula"]});
export const childModules = Object.freeze({"billings":"./billings/billings.js","bozeman":"./bozeman/bozeman.js","butte":"./butte/butte.js","kalispell":"./kalispell/kalispell.js","missoula":"./missoula/missoula.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
