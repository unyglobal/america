// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"iguala-de-la-independencia","repository":"america","path":"mexico/guerrero/iguala-de-la-independencia","depth":3,"parent":"mexico/guerrero","children":["centro","colonia-del-seguro-social","cosmos","educacion","fraccionamiento-iii","jacarandas","los-cirianes","los-libertadores","perpetuo-socorro","progreso","valle-dorado","valle-verde"]});
export const childModules = Object.freeze({"centro":"./centro/centro.js","colonia-del-seguro-social":"./colonia-del-seguro-social/colonia-del-seguro-social.js","cosmos":"./cosmos/cosmos.js","educacion":"./educacion/educacion.js","fraccionamiento-iii":"./fraccionamiento-iii/fraccionamiento-iii.js","jacarandas":"./jacarandas/jacarandas.js","los-cirianes":"./los-cirianes/los-cirianes.js","los-libertadores":"./los-libertadores/los-libertadores.js","perpetuo-socorro":"./perpetuo-socorro/perpetuo-socorro.js","progreso":"./progreso/progreso.js","valle-dorado":"./valle-dorado/valle-dorado.js","valle-verde":"./valle-verde/valle-verde.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
