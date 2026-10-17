// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"penonome","repository":"america","path":"panama/cocle/penonome","depth":3,"parent":"panama/cocle","children":["brisas-de-zarati","el-higueron","las-mendozas","san-antonio","villa-aranca","villa-belen"]});
export const childModules = Object.freeze({"brisas-de-zarati":"./brisas-de-zarati/brisas-de-zarati.js","el-higueron":"./el-higueron/el-higueron.js","las-mendozas":"./las-mendozas/las-mendozas.js","san-antonio":"./san-antonio/san-antonio.js","villa-aranca":"./villa-aranca/villa-aranca.js","villa-belen":"./villa-belen/villa-belen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
