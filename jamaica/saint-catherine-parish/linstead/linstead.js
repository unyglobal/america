// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"linstead","repository":"america","path":"jamaica/saint-catherine-parish/linstead","depth":3,"parent":"jamaica/saint-catherine-parish","children":["begonia-lodge","logan-castle"]});
export const childModules = Object.freeze({"begonia-lodge":"./begonia-lodge/begonia-lodge.js","logan-castle":"./logan-castle/logan-castle.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
