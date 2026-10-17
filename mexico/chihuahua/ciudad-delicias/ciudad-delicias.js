// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ciudad-delicias","repository":"america","path":"mexico/chihuahua/ciudad-delicias","depth":3,"parent":"mexico/chihuahua","children":["bugambilias","el-alamo","fraccionamiento-del-bosque"]});
export const childModules = Object.freeze({"bugambilias":"./bugambilias/bugambilias.js","el-alamo":"./el-alamo/el-alamo.js","fraccionamiento-del-bosque":"./fraccionamiento-del-bosque/fraccionamiento-del-bosque.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
