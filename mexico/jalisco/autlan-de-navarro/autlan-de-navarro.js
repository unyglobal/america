// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"autlan-de-navarro","repository":"america","path":"mexico/jalisco/autlan-de-navarro","depth":3,"parent":"mexico/jalisco","children":["alameda","arboledas","bancaria","centro","el-cerrito","las-lanzas","las-montanas","magisterial","puerta-de-la-costa"]});
export const childModules = Object.freeze({"alameda":"./alameda/alameda.js","arboledas":"./arboledas/arboledas.js","bancaria":"./bancaria/bancaria.js","centro":"./centro/centro.js","el-cerrito":"./el-cerrito/el-cerrito.js","las-lanzas":"./las-lanzas/las-lanzas.js","las-montanas":"./las-montanas/las-montanas.js","magisterial":"./magisterial/magisterial.js","puerta-de-la-costa":"./puerta-de-la-costa/puerta-de-la-costa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
