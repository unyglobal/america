// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nayarit","repository":"america","path":"mexico/nayarit","depth":2,"parent":"mexico","children":["acaponeta","bucerias","compostela","ixtlan-del-rio","mezcales","san-jose-del-valle","santiago-ixcuintla","tepic","xalisco"]});
export const childModules = Object.freeze({"acaponeta":"./acaponeta/acaponeta.js","bucerias":"./bucerias/bucerias.js","compostela":"./compostela/compostela.js","ixtlan-del-rio":"./ixtlan-del-rio/ixtlan-del-rio.js","mezcales":"./mezcales/mezcales.js","san-jose-del-valle":"./san-jose-del-valle/san-jose-del-valle.js","santiago-ixcuintla":"./santiago-ixcuintla/santiago-ixcuintla.js","tepic":"./tepic/tepic.js","xalisco":"./xalisco/xalisco.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
