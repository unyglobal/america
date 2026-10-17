// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"esteli-department","repository":"america","path":"nicaragua/esteli-department","depth":2,"parent":"nicaragua","children":["esteli"]});
export const childModules = Object.freeze({"esteli":"./esteli/esteli.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
