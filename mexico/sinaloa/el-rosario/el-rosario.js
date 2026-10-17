// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"el-rosario","repository":"america","path":"mexico/sinaloa/el-rosario","depth":3,"parent":"mexico/sinaloa","children":["centro","panteon","prolongacion-alfonso-calderon"]});
export const childModules = Object.freeze({"centro":"./centro/centro.js","panteon":"./panteon/panteon.js","prolongacion-alfonso-calderon":"./prolongacion-alfonso-calderon/prolongacion-alfonso-calderon.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
