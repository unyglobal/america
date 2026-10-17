// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tecamachalco","repository":"america","path":"mexico/puebla/tecamachalco","depth":3,"parent":"mexico/puebla","children":["el-calvario","el-convento","san-antonio","san-nicolas"]});
export const childModules = Object.freeze({"el-calvario":"./el-calvario/el-calvario.js","el-convento":"./el-convento/el-convento.js","san-antonio":"./san-antonio/san-antonio.js","san-nicolas":"./san-nicolas/san-nicolas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
