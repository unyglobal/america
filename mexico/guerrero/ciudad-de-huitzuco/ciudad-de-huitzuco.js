// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ciudad-de-huitzuco","repository":"america","path":"mexico/guerrero/ciudad-de-huitzuco","depth":3,"parent":"mexico/guerrero","children":["agua-zarca","brisas-del-real","centro","chalpulixtlal","colonia-del-real","colonia-del-tepeyac","cristo-rey","el-calvario","el-tanque-rojo","la-maroma","las-trincheras","los-pilares","lucero","san-bernabe","veintiocho-de-febrero","zalcingo"]});
export const childModules = Object.freeze({"agua-zarca":"./agua-zarca/agua-zarca.js","brisas-del-real":"./brisas-del-real/brisas-del-real.js","centro":"./centro/centro.js","chalpulixtlal":"./chalpulixtlal/chalpulixtlal.js","colonia-del-real":"./colonia-del-real/colonia-del-real.js","colonia-del-tepeyac":"./colonia-del-tepeyac/colonia-del-tepeyac.js","cristo-rey":"./cristo-rey/cristo-rey.js","el-calvario":"./el-calvario/el-calvario.js","el-tanque-rojo":"./el-tanque-rojo/el-tanque-rojo.js","la-maroma":"./la-maroma/la-maroma.js","las-trincheras":"./las-trincheras/las-trincheras.js","los-pilares":"./los-pilares/los-pilares.js","lucero":"./lucero/lucero.js","san-bernabe":"./san-bernabe/san-bernabe.js","veintiocho-de-febrero":"./veintiocho-de-febrero/veintiocho-de-febrero.js","zalcingo":"./zalcingo/zalcingo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
