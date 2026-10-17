// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nord","repository":"america","path":"haiti/nord","depth":2,"parent":"haiti","children":["cap-haitien","lenbe","saint-raphael"]});
export const childModules = Object.freeze({"cap-haitien":"./cap-haitien/cap-haitien.js","lenbe":"./lenbe/lenbe.js","saint-raphael":"./saint-raphael/saint-raphael.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
