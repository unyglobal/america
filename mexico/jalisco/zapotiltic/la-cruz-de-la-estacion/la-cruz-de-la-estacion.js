// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"la-cruz-de-la-estacion","repository":"america","path":"mexico/jalisco/zapotiltic/la-cruz-de-la-estacion","depth":4,"parent":"mexico/jalisco/zapotiltic","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
