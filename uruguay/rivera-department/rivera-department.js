// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rivera-department","repository":"america","path":"uruguay/rivera-department","depth":2,"parent":"uruguay","children":["rivera"]});
export const childModules = Object.freeze({"rivera":"./rivera/rivera.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
