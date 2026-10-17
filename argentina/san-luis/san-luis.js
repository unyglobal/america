// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-luis","repository":"america","path":"argentina/san-luis","depth":2,"parent":"argentina","children":["villa-mercedes"]});
export const childModules = Object.freeze({"villa-mercedes":"./villa-mercedes/villa-mercedes.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
