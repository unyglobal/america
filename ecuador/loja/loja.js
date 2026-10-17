// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"loja","repository":"america","path":"ecuador/loja","depth":2,"parent":"ecuador","children":["cariamanga","catamayo"]});
export const childModules = Object.freeze({"cariamanga":"./cariamanga/cariamanga.js","catamayo":"./catamayo/catamayo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
