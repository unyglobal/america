// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chontales-department","repository":"america","path":"nicaragua/chontales-department","depth":2,"parent":"nicaragua","children":["juigalpa"]});
export const childModules = Object.freeze({"juigalpa":"./juigalpa/juigalpa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
