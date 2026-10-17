// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"barrio-mejoraminto-social","repository":"america","path":"dominican-republic/nacional/villa-consuelo/barrio-mejoraminto-social","depth":4,"parent":"dominican-republic/nacional/villa-consuelo","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
