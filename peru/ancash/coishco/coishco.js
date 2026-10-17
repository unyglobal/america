// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"coishco","repository":"america","path":"peru/ancash/coishco","depth":3,"parent":"peru/ancash","children":["el-milagro"]});
export const childModules = Object.freeze({"el-milagro":"./el-milagro/el-milagro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
