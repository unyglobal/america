// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"huilango","repository":"america","path":"mexico/mexico/huilango","depth":3,"parent":"mexico/mexico","children":["el-rosario"]});
export const childModules = Object.freeze({"el-rosario":"./el-rosario/el-rosario.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
