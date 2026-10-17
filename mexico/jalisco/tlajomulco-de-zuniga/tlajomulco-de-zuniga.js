// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tlajomulco-de-zuniga","repository":"america","path":"mexico/jalisco/tlajomulco-de-zuniga","depth":3,"parent":"mexico/jalisco","children":["arcos-de-la-cruz","centro","el-ranchito","hacienda-de-los-agaves","la-cruz","la-joya","la-lomita","larios","las-flores","los-ocampo","patria","santa-fe","villa-quintana"]});
export const childModules = Object.freeze({"arcos-de-la-cruz":"./arcos-de-la-cruz/arcos-de-la-cruz.js","centro":"./centro/centro.js","el-ranchito":"./el-ranchito/el-ranchito.js","hacienda-de-los-agaves":"./hacienda-de-los-agaves/hacienda-de-los-agaves.js","la-cruz":"./la-cruz/la-cruz.js","la-joya":"./la-joya/la-joya.js","la-lomita":"./la-lomita/la-lomita.js","larios":"./larios/larios.js","las-flores":"./las-flores/las-flores.js","los-ocampo":"./los-ocampo/los-ocampo.js","patria":"./patria/patria.js","santa-fe":"./santa-fe/santa-fe.js","villa-quintana":"./villa-quintana/villa-quintana.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
