// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"puerto-vallarta","repository":"america","path":"mexico/jalisco/puerto-vallarta","depth":3,"parent":"mexico/jalisco","children":["centro","cinco-de-diciembre","colonia-del-cerro","el-cerro","gastronomicos","lopez-mateos"]});
export const childModules = Object.freeze({"centro":"./centro/centro.js","cinco-de-diciembre":"./cinco-de-diciembre/cinco-de-diciembre.js","colonia-del-cerro":"./colonia-del-cerro/colonia-del-cerro.js","el-cerro":"./el-cerro/el-cerro.js","gastronomicos":"./gastronomicos/gastronomicos.js","lopez-mateos":"./lopez-mateos/lopez-mateos.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
