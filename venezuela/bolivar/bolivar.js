// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bolivar","repository":"america","path":"venezuela/bolivar","depth":2,"parent":"venezuela","children":["caicara-del-orinoco","ciudad-bolivar","ciudad-guayana","ciudad-piar","el-dorado","guasipati","la-paragua","santa-elena-de-uairen","tumeremo","upata"]});
export const childModules = Object.freeze({"caicara-del-orinoco":"./caicara-del-orinoco/caicara-del-orinoco.js","ciudad-bolivar":"./ciudad-bolivar/ciudad-bolivar.js","ciudad-guayana":"./ciudad-guayana/ciudad-guayana.js","ciudad-piar":"./ciudad-piar/ciudad-piar.js","el-dorado":"./el-dorado/el-dorado.js","guasipati":"./guasipati/guasipati.js","la-paragua":"./la-paragua/la-paragua.js","santa-elena-de-uairen":"./santa-elena-de-uairen/santa-elena-de-uairen.js","tumeremo":"./tumeremo/tumeremo.js","upata":"./upata/upata.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
