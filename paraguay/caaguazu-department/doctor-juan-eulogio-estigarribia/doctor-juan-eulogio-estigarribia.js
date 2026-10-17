// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"doctor-juan-eulogio-estigarribia","repository":"america","path":"paraguay/caaguazu-department/doctor-juan-eulogio-estigarribia","depth":3,"parent":"paraguay/caaguazu-department","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
