// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"colonia-del-valle","repository":"america","path":"mexico/mexico-city/colonia-del-valle","depth":3,"parent":"mexico/mexico-city","children":["colonia-narvarte","tlacoquemeca"]});
export const childModules = Object.freeze({"colonia-narvarte":"./colonia-narvarte/colonia-narvarte.js","tlacoquemeca":"./tlacoquemeca/tlacoquemeca.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
