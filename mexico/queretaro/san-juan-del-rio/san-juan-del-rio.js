// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-juan-del-rio","repository":"america","path":"mexico/queretaro/san-juan-del-rio","depth":3,"parent":"mexico/queretaro","children":["el-molino","las-huertas","quintas-esmeralda","residencial-el-angel","san-pedro-tercera-seccion","villas-tabachines"]});
export const childModules = Object.freeze({"el-molino":"./el-molino/el-molino.js","las-huertas":"./las-huertas/las-huertas.js","quintas-esmeralda":"./quintas-esmeralda/quintas-esmeralda.js","residencial-el-angel":"./residencial-el-angel/residencial-el-angel.js","san-pedro-tercera-seccion":"./san-pedro-tercera-seccion/san-pedro-tercera-seccion.js","villas-tabachines":"./villas-tabachines/villas-tabachines.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
