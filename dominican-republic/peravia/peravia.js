// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"peravia","repository":"america","path":"dominican-republic/peravia","depth":2,"parent":"dominican-republic","children":["bani"]});
export const childModules = Object.freeze({"bani":"./bani/bani.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
