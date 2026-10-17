// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"petare","repository":"america","path":"venezuela/miranda/petare","depth":3,"parent":"venezuela/miranda","children":["barrio-san-miguel","brisas-de-petare","buena-vista","el-carmen","el-cerrito","el-dorado","el-llanito","la-cruz","las-vegas-de-petare"]});
export const childModules = Object.freeze({"barrio-san-miguel":"./barrio-san-miguel/barrio-san-miguel.js","brisas-de-petare":"./brisas-de-petare/brisas-de-petare.js","buena-vista":"./buena-vista/buena-vista.js","el-carmen":"./el-carmen/el-carmen.js","el-cerrito":"./el-cerrito/el-cerrito.js","el-dorado":"./el-dorado/el-dorado.js","el-llanito":"./el-llanito/el-llanito.js","la-cruz":"./la-cruz/la-cruz.js","las-vegas-de-petare":"./las-vegas-de-petare/las-vegas-de-petare.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
