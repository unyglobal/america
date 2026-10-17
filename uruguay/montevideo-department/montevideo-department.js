// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"montevideo-department","repository":"america","path":"uruguay/montevideo-department","depth":2,"parent":"uruguay","children":["montevideo"]});
export const childModules = Object.freeze({"montevideo":"./montevideo/montevideo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
