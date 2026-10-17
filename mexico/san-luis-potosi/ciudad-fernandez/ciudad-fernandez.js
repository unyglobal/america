// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ciudad-fernandez","repository":"america","path":"mexico/san-luis-potosi/ciudad-fernandez","depth":3,"parent":"mexico/san-luis-potosi","children":["concordia","el-alto","el-manantial","el-viento","galeana","jardines-del-alto","la-mora","mollinedo","moras-de-frontera","prados-de-moctezuma","san-martin"]});
export const childModules = Object.freeze({"concordia":"./concordia/concordia.js","el-alto":"./el-alto/el-alto.js","el-manantial":"./el-manantial/el-manantial.js","el-viento":"./el-viento/el-viento.js","galeana":"./galeana/galeana.js","jardines-del-alto":"./jardines-del-alto/jardines-del-alto.js","la-mora":"./la-mora/la-mora.js","mollinedo":"./mollinedo/mollinedo.js","moras-de-frontera":"./moras-de-frontera/moras-de-frontera.js","prados-de-moctezuma":"./prados-de-moctezuma/prados-de-moctezuma.js","san-martin":"./san-martin/san-martin.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
