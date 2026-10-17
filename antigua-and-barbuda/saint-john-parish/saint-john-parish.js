// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"saint-john-parish","repository":"america","path":"antigua-and-barbuda/saint-john-parish","depth":2,"parent":"antigua-and-barbuda","children":["saint-john-s"]});
export const childModules = Object.freeze({"saint-john-s":"./saint-john-s/saint-john-s.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
