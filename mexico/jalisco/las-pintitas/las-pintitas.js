// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"las-pintitas","repository":"america","path":"mexico/jalisco/las-pintitas","depth":3,"parent":"mexico/jalisco","children":["el-carmen","san-miguel"]});
export const childModules = Object.freeze({"el-carmen":"./el-carmen/el-carmen.js","san-miguel":"./san-miguel/san-miguel.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
