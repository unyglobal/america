// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"las-choapas","repository":"america","path":"mexico/veracruz/las-choapas","depth":3,"parent":"mexico/veracruz","children":["bateria-tres","campo-nuevo","centro","la-cuevita","mexico","nazareth","reforma","reforma-agraria","tepito","tiburoneros"]});
export const childModules = Object.freeze({"bateria-tres":"./bateria-tres/bateria-tres.js","campo-nuevo":"./campo-nuevo/campo-nuevo.js","centro":"./centro/centro.js","la-cuevita":"./la-cuevita/la-cuevita.js","mexico":"./mexico/mexico.js","nazareth":"./nazareth/nazareth.js","reforma":"./reforma/reforma.js","reforma-agraria":"./reforma-agraria/reforma-agraria.js","tepito":"./tepito/tepito.js","tiburoneros":"./tiburoneros/tiburoneros.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
