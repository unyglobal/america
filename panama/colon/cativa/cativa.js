// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cativa","repository":"america","path":"panama/colon/cativa","depth":3,"parent":"panama/colon","children":["barriada-san-isidro","barriada-san-pedro","el-polvorin","pueblo-nuevo"]});
export const childModules = Object.freeze({"barriada-san-isidro":"./barriada-san-isidro/barriada-san-isidro.js","barriada-san-pedro":"./barriada-san-pedro/barriada-san-pedro.js","el-polvorin":"./el-polvorin/el-polvorin.js","pueblo-nuevo":"./pueblo-nuevo/pueblo-nuevo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
