// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cuernavaca","repository":"america","path":"mexico/morelos/cuernavaca","depth":3,"parent":"mexico/morelos","children":["amatitlan"]});
export const childModules = Object.freeze({"amatitlan":"./amatitlan/amatitlan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
