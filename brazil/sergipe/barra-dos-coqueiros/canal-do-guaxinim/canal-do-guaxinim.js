// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"canal-do-guaxinim","repository":"america","path":"brazil/sergipe/barra-dos-coqueiros/canal-do-guaxinim","depth":4,"parent":"brazil/sergipe/barra-dos-coqueiros","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
