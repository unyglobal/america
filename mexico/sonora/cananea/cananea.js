// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cananea","repository":"america","path":"mexico/sonora/cananea","depth":3,"parent":"mexico/sonora","children":["ayuntamiento","cementerio-viejo","centro","el-llanito","el-penascal","el-volteadero","estadio","green","la-empacadora","la-estacion","mesa-norte","petroleros","romerillo","san-isidro"]});
export const childModules = Object.freeze({"ayuntamiento":"./ayuntamiento/ayuntamiento.js","cementerio-viejo":"./cementerio-viejo/cementerio-viejo.js","centro":"./centro/centro.js","el-llanito":"./el-llanito/el-llanito.js","el-penascal":"./el-penascal/el-penascal.js","el-volteadero":"./el-volteadero/el-volteadero.js","estadio":"./estadio/estadio.js","green":"./green/green.js","la-empacadora":"./la-empacadora/la-empacadora.js","la-estacion":"./la-estacion/la-estacion.js","mesa-norte":"./mesa-norte/mesa-norte.js","petroleros":"./petroleros/petroleros.js","romerillo":"./romerillo/romerillo.js","san-isidro":"./san-isidro/san-isidro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
