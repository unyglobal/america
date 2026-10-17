// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tepeaca","repository":"america","path":"mexico/puebla/tepeaca","depth":3,"parent":"mexico/puebla","children":["centro","el-calvario","el-divino-salvador","lomas-del-calvario","san-jose","san-sebastian","santa-cruz-temilco"]});
export const childModules = Object.freeze({"centro":"./centro/centro.js","el-calvario":"./el-calvario/el-calvario.js","el-divino-salvador":"./el-divino-salvador/el-divino-salvador.js","lomas-del-calvario":"./lomas-del-calvario/lomas-del-calvario.js","san-jose":"./san-jose/san-jose.js","san-sebastian":"./san-sebastian/san-sebastian.js","santa-cruz-temilco":"./santa-cruz-temilco/santa-cruz-temilco.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
