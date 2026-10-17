// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"corrientes","repository":"america","path":"argentina/corrientes","depth":2,"parent":"argentina","children":["curuzu-cuatia","esquina","gobernador-virasora","goya","ituzaingo","monte-caseros","paso-de-los-libres","saladas","san-luis-del-palmar"]});
export const childModules = Object.freeze({"curuzu-cuatia":"./curuzu-cuatia/curuzu-cuatia.js","esquina":"./esquina/esquina.js","gobernador-virasora":"./gobernador-virasora/gobernador-virasora.js","goya":"./goya/goya.js","ituzaingo":"./ituzaingo/ituzaingo.js","monte-caseros":"./monte-caseros/monte-caseros.js","paso-de-los-libres":"./paso-de-los-libres/paso-de-los-libres.js","saladas":"./saladas/saladas.js","san-luis-del-palmar":"./san-luis-del-palmar/san-luis-del-palmar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
