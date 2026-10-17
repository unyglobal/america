// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"barrio-de-jalisco","repository":"america","path":"mexico/chihuahua/jose-mariano-jimenez/barrio-de-jalisco","depth":4,"parent":"mexico/chihuahua/jose-mariano-jimenez","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
