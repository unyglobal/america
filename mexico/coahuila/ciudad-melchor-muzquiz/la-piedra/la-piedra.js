// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"la-piedra","repository":"america","path":"mexico/coahuila/ciudad-melchor-muzquiz/la-piedra","depth":4,"parent":"mexico/coahuila/ciudad-melchor-muzquiz","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
