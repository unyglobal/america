// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"orizaba","repository":"america","path":"mexico/veracruz/orizaba","depth":3,"parent":"mexico/veracruz","children":["el-eden","emiliano-zapata","emiliano-zapata-norte","empleados-moctezuma","francisco-gavilondo-soler","galan","hidalgo","la-concordia","pensiones","pichucalco","veintisiete-de-mayo"]});
export const childModules = Object.freeze({"el-eden":"./el-eden/el-eden.js","emiliano-zapata":"./emiliano-zapata/emiliano-zapata.js","emiliano-zapata-norte":"./emiliano-zapata-norte/emiliano-zapata-norte.js","empleados-moctezuma":"./empleados-moctezuma/empleados-moctezuma.js","francisco-gavilondo-soler":"./francisco-gavilondo-soler/francisco-gavilondo-soler.js","galan":"./galan/galan.js","hidalgo":"./hidalgo/hidalgo.js","la-concordia":"./la-concordia/la-concordia.js","pensiones":"./pensiones/pensiones.js","pichucalco":"./pichucalco/pichucalco.js","veintisiete-de-mayo":"./veintisiete-de-mayo/veintisiete-de-mayo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
