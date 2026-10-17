// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ciudad-de-huajuapan-de-leon","repository":"america","path":"mexico/oaxaca/ciudad-de-huajuapan-de-leon","depth":3,"parent":"mexico/oaxaca","children":["aviacion-primera-seccion","centro","el-calvario","la-merced","la-providencia","las-huertas","los-presidentes-primera-seccion","los-presidentes-segunda-seccion","morelos","san-antonio","tepeyac"]});
export const childModules = Object.freeze({"aviacion-primera-seccion":"./aviacion-primera-seccion/aviacion-primera-seccion.js","centro":"./centro/centro.js","el-calvario":"./el-calvario/el-calvario.js","la-merced":"./la-merced/la-merced.js","la-providencia":"./la-providencia/la-providencia.js","las-huertas":"./las-huertas/las-huertas.js","los-presidentes-primera-seccion":"./los-presidentes-primera-seccion/los-presidentes-primera-seccion.js","los-presidentes-segunda-seccion":"./los-presidentes-segunda-seccion/los-presidentes-segunda-seccion.js","morelos":"./morelos/morelos.js","san-antonio":"./san-antonio/san-antonio.js","tepeyac":"./tepeyac/tepeyac.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
