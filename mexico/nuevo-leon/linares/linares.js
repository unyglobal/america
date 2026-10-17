// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"linares","repository":"america","path":"mexico/nuevo-leon/linares","depth":3,"parent":"mexico/nuevo-leon","children":["america","centro-linares","el-barrial","el-topo","puente-honda","villegas"]});
export const childModules = Object.freeze({"america":"./america/america.js","centro-linares":"./centro-linares/centro-linares.js","el-barrial":"./el-barrial/el-barrial.js","el-topo":"./el-topo/el-topo.js","puente-honda":"./puente-honda/puente-honda.js","villegas":"./villegas/villegas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
