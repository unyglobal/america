// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"petapa","repository":"america","path":"guatemala/guatemala/petapa","depth":3,"parent":"guatemala/guatemala","children":["el-cortijo","san-antonio"]});
export const childModules = Object.freeze({"el-cortijo":"./el-cortijo/el-cortijo.js","san-antonio":"./san-antonio/san-antonio.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
