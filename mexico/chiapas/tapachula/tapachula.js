// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tapachula","repository":"america","path":"mexico/chiapas/tapachula","depth":3,"parent":"mexico/chiapas","children":["barrio-nuevo","centro","colonia-centro","cuarto-regimiento-de-caballeria-motorizada","las-mil-garzas","militar-treinta-y-seis-a-dos","militar-treinta-y-seis-a-tres","san-juan-de-los-lagos","trece-de-febrero","villa-margaritas"]});
export const childModules = Object.freeze({"barrio-nuevo":"./barrio-nuevo/barrio-nuevo.js","centro":"./centro/centro.js","colonia-centro":"./colonia-centro/colonia-centro.js","cuarto-regimiento-de-caballeria-motorizada":"./cuarto-regimiento-de-caballeria-motorizada/cuarto-regimiento-de-caballeria-motorizada.js","las-mil-garzas":"./las-mil-garzas/las-mil-garzas.js","militar-treinta-y-seis-a-dos":"./militar-treinta-y-seis-a-dos/militar-treinta-y-seis-a-dos.js","militar-treinta-y-seis-a-tres":"./militar-treinta-y-seis-a-tres/militar-treinta-y-seis-a-tres.js","san-juan-de-los-lagos":"./san-juan-de-los-lagos/san-juan-de-los-lagos.js","trece-de-febrero":"./trece-de-febrero/trece-de-febrero.js","villa-margaritas":"./villa-margaritas/villa-margaritas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
