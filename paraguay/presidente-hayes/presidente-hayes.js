// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"presidente-hayes","repository":"america","path":"paraguay/presidente-hayes","depth":2,"parent":"paraguay","children":["villa-hayes"]});
export const childModules = Object.freeze({"villa-hayes":"./villa-hayes/villa-hayes.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
