// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"treinta-y-tres-department","repository":"america","path":"uruguay/treinta-y-tres-department","depth":2,"parent":"uruguay","children":["treinta-y-tres"]});
export const childModules = Object.freeze({"treinta-y-tres":"./treinta-y-tres/treinta-y-tres.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
