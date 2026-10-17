// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"antigua-and-barbuda","repository":"america","path":"antigua-and-barbuda","depth":1,"parent":"","children":["saint-john-parish"]});
export const childModules = Object.freeze({"saint-john-parish":"./saint-john-parish/saint-john-parish.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
