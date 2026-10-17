// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hidalgo","repository":"america","path":"mexico/nuevo-leon/hidalgo","depth":3,"parent":"mexico/nuevo-leon","children":["actopan","alfonso-martinez-dominguez","apan","centro","cuauhtemoc","cuautepec","don-antonio","fray-bernardino-de-sahagun","lazaro-cardenas","revolucion"]});
export const childModules = Object.freeze({"actopan":"./actopan/actopan.js","alfonso-martinez-dominguez":"./alfonso-martinez-dominguez/alfonso-martinez-dominguez.js","apan":"./apan/apan.js","centro":"./centro/centro.js","cuauhtemoc":"./cuauhtemoc/cuauhtemoc.js","cuautepec":"./cuautepec/cuautepec.js","don-antonio":"./don-antonio/don-antonio.js","fray-bernardino-de-sahagun":"./fray-bernardino-de-sahagun/fray-bernardino-de-sahagun.js","lazaro-cardenas":"./lazaro-cardenas/lazaro-cardenas.js","revolucion":"./revolucion/revolucion.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
