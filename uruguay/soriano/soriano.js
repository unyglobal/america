// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"soriano","repository":"america","path":"uruguay/soriano","depth":2,"parent":"uruguay","children":["dolores","mercedes"]});
export const childModules = Object.freeze({"dolores":"./dolores/dolores.js","mercedes":"./mercedes/mercedes.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
