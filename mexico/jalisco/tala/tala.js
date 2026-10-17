// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tala","repository":"america","path":"mexico/jalisco/tala","depth":3,"parent":"mexico/jalisco","children":["el-ranchito","el-tempizque","el-triangulo","el-venado","infonavit","jacarandas","la-capilla","los-barrancones","los-cerritos","san-francisco","solidaridad-la-higuera"]});
export const childModules = Object.freeze({"el-ranchito":"./el-ranchito/el-ranchito.js","el-tempizque":"./el-tempizque/el-tempizque.js","el-triangulo":"./el-triangulo/el-triangulo.js","el-venado":"./el-venado/el-venado.js","infonavit":"./infonavit/infonavit.js","jacarandas":"./jacarandas/jacarandas.js","la-capilla":"./la-capilla/la-capilla.js","los-barrancones":"./los-barrancones/los-barrancones.js","los-cerritos":"./los-cerritos/los-cerritos.js","san-francisco":"./san-francisco/san-francisco.js","solidaridad-la-higuera":"./solidaridad-la-higuera/solidaridad-la-higuera.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
