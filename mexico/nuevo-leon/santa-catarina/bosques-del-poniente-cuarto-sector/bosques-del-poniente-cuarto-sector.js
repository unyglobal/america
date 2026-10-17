// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bosques-del-poniente-cuarto-sector","repository":"america","path":"mexico/nuevo-leon/santa-catarina/bosques-del-poniente-cuarto-sector","depth":4,"parent":"mexico/nuevo-leon/santa-catarina","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
