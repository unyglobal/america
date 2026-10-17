// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ciudad-general-escobedo","repository":"america","path":"mexico/nuevo-leon/ciudad-general-escobedo","depth":3,"parent":"mexico/nuevo-leon","children":["bosques-de-quebec","los-olivos"]});
export const childModules = Object.freeze({"bosques-de-quebec":"./bosques-de-quebec/bosques-de-quebec.js","los-olivos":"./los-olivos/los-olivos.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
