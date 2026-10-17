// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"laredo","repository":"america","path":"mexico/veracruz/poza-rica-de-hidalgo/laredo","depth":4,"parent":"mexico/veracruz/poza-rica-de-hidalgo","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
