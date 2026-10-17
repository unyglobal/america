// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ciudad-melchor-muzquiz","repository":"america","path":"mexico/coahuila/ciudad-melchor-muzquiz","depth":3,"parent":"mexico/coahuila","children":["el-aguacate","el-pescadito","el-socorrito","la-ford","la-piedra","los-terreros","parque-campestre","zona-centro"]});
export const childModules = Object.freeze({"el-aguacate":"./el-aguacate/el-aguacate.js","el-pescadito":"./el-pescadito/el-pescadito.js","el-socorrito":"./el-socorrito/el-socorrito.js","la-ford":"./la-ford/la-ford.js","la-piedra":"./la-piedra/la-piedra.js","los-terreros":"./los-terreros/los-terreros.js","parque-campestre":"./parque-campestre/parque-campestre.js","zona-centro":"./zona-centro/zona-centro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
