// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"magdalena","repository":"america","path":"mexico/jalisco/magdalena","depth":3,"parent":"mexico/jalisco","children":["canita","centro","cerrito","el-pile","espinos","ferrocarriles","llanito","miguel-hidalgo","ojo-de-agua","porfirio-diaz","ranchito","reforma","santuario"]});
export const childModules = Object.freeze({"canita":"./canita/canita.js","centro":"./centro/centro.js","cerrito":"./cerrito/cerrito.js","el-pile":"./el-pile/el-pile.js","espinos":"./espinos/espinos.js","ferrocarriles":"./ferrocarriles/ferrocarriles.js","llanito":"./llanito/llanito.js","miguel-hidalgo":"./miguel-hidalgo/miguel-hidalgo.js","ojo-de-agua":"./ojo-de-agua/ojo-de-agua.js","porfirio-diaz":"./porfirio-diaz/porfirio-diaz.js","ranchito":"./ranchito/ranchito.js","reforma":"./reforma/reforma.js","santuario":"./santuario/santuario.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
