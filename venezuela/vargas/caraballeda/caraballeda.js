// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"caraballeda","repository":"america","path":"venezuela/vargas/caraballeda","depth":3,"parent":"venezuela/vargas","children":["el-caribe"]});
export const childModules = Object.freeze({"el-caribe":"./el-caribe/el-caribe.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
