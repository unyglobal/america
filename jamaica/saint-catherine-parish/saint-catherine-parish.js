// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"saint-catherine-parish","repository":"america","path":"jamaica/saint-catherine-parish","depth":2,"parent":"jamaica","children":["linstead","old-harbour","portmore","spanish-town"]});
export const childModules = Object.freeze({"linstead":"./linstead/linstead.js","old-harbour":"./old-harbour/old-harbour.js","portmore":"./portmore/portmore.js","spanish-town":"./spanish-town/spanish-town.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
