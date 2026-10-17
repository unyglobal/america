// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cerro-largo","repository":"america","path":"uruguay/cerro-largo","depth":2,"parent":"uruguay","children":["melo"]});
export const childModules = Object.freeze({"melo":"./melo/melo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
