// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mixco","repository":"america","path":"guatemala/guatemala/mixco","depth":3,"parent":"guatemala/guatemala","children":["el-roconal","nueva-vida"]});
export const childModules = Object.freeze({"el-roconal":"./el-roconal/el-roconal.js","nueva-vida":"./nueva-vida/nueva-vida.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
