// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tiquisate","repository":"america","path":"guatemala/escuintla/tiquisate","depth":3,"parent":"guatemala/escuintla","children":["bartolome-de-las-casas","bordas-barriles","el-buen-pastor","jardines-de-fatima","la-fortaleza","quince-de-junio","san-juan-jose-castillo","shalom"]});
export const childModules = Object.freeze({"bartolome-de-las-casas":"./bartolome-de-las-casas/bartolome-de-las-casas.js","bordas-barriles":"./bordas-barriles/bordas-barriles.js","el-buen-pastor":"./el-buen-pastor/el-buen-pastor.js","jardines-de-fatima":"./jardines-de-fatima/jardines-de-fatima.js","la-fortaleza":"./la-fortaleza/la-fortaleza.js","quince-de-junio":"./quince-de-junio/quince-de-junio.js","san-juan-jose-castillo":"./san-juan-jose-castillo/san-juan-jose-castillo.js","shalom":"./shalom/shalom.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
