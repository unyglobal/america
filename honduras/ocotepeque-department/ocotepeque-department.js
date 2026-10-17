// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ocotepeque-department","repository":"america","path":"honduras/ocotepeque-department","depth":2,"parent":"honduras","children":["belen-gualcho"]});
export const childModules = Object.freeze({"belen-gualcho":"./belen-gualcho/belen-gualcho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
