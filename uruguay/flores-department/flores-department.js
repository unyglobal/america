// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"flores-department","repository":"america","path":"uruguay/flores-department","depth":2,"parent":"uruguay","children":["trinidad"]});
export const childModules = Object.freeze({"trinidad":"./trinidad/trinidad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
