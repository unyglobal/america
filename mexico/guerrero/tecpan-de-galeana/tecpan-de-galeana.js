// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tecpan-de-galeana","repository":"america","path":"mexico/guerrero/tecpan-de-galeana","depth":3,"parent":"mexico/guerrero","children":["centro","el-capire","el-corte","el-fortin","el-pri","el-tanque","el-tepetate","francisco-i-nadero","lagunillas","las-flores","ramos","revolucion"]});
export const childModules = Object.freeze({"centro":"./centro/centro.js","el-capire":"./el-capire/el-capire.js","el-corte":"./el-corte/el-corte.js","el-fortin":"./el-fortin/el-fortin.js","el-pri":"./el-pri/el-pri.js","el-tanque":"./el-tanque/el-tanque.js","el-tepetate":"./el-tepetate/el-tepetate.js","francisco-i-nadero":"./francisco-i-nadero/francisco-i-nadero.js","lagunillas":"./lagunillas/lagunillas.js","las-flores":"./las-flores/las-flores.js","ramos":"./ramos/ramos.js","revolucion":"./revolucion/revolucion.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
