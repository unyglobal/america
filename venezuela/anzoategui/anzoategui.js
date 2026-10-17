// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"anzoategui","repository":"america","path":"venezuela/anzoategui","depth":2,"parent":"venezuela","children":["anaco","aragua-de-barcelona","barcelona","cantaura","clarines","el-tigre","lecherias","pariaguan","puerto-la-cruz","puerto-piritu","san-jose-de-guanipa","soledad"]});
export const childModules = Object.freeze({"anaco":"./anaco/anaco.js","aragua-de-barcelona":"./aragua-de-barcelona/aragua-de-barcelona.js","barcelona":"./barcelona/barcelona.js","cantaura":"./cantaura/cantaura.js","clarines":"./clarines/clarines.js","el-tigre":"./el-tigre/el-tigre.js","lecherias":"./lecherias/lecherias.js","pariaguan":"./pariaguan/pariaguan.js","puerto-la-cruz":"./puerto-la-cruz/puerto-la-cruz.js","puerto-piritu":"./puerto-piritu/puerto-piritu.js","san-jose-de-guanipa":"./san-jose-de-guanipa/san-jose-de-guanipa.js","soledad":"./soledad/soledad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
