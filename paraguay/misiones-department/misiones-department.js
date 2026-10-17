// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"misiones-department","repository":"america","path":"paraguay/misiones-department","depth":2,"parent":"paraguay","children":["san-juan-bautista"]});
export const childModules = Object.freeze({"san-juan-bautista":"./san-juan-bautista/san-juan-bautista.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
