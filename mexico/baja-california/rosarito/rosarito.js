// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rosarito","repository":"america","path":"mexico/baja-california/rosarito","depth":3,"parent":"mexico/baja-california","children":["el-papalote"]});
export const childModules = Object.freeze({"el-papalote":"./el-papalote/el-papalote.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
