// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ameca","repository":"america","path":"mexico/jalisco/ameca","depth":3,"parent":"mexico/jalisco","children":["arboledas","centro","el-carmen","el-nogal","el-santuario","fraccionamiento-municipal","huerta-de-morales","infonavit-sesenta-y-tres","la-cienega","la-huerta","la-soledad","los-angeles","los-romero","san-jose"]});
export const childModules = Object.freeze({"arboledas":"./arboledas/arboledas.js","centro":"./centro/centro.js","el-carmen":"./el-carmen/el-carmen.js","el-nogal":"./el-nogal/el-nogal.js","el-santuario":"./el-santuario/el-santuario.js","fraccionamiento-municipal":"./fraccionamiento-municipal/fraccionamiento-municipal.js","huerta-de-morales":"./huerta-de-morales/huerta-de-morales.js","infonavit-sesenta-y-tres":"./infonavit-sesenta-y-tres/infonavit-sesenta-y-tres.js","la-cienega":"./la-cienega/la-cienega.js","la-huerta":"./la-huerta/la-huerta.js","la-soledad":"./la-soledad/la-soledad.js","los-angeles":"./los-angeles/los-angeles.js","los-romero":"./los-romero/los-romero.js","san-jose":"./san-jose/san-jose.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
