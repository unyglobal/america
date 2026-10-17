// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"panama-city","repository":"america","path":"panama/panama/panama-city","depth":3,"parent":"panama/panama","children":["el-carmen","obarrio","villa-lilla","vista-hermosa"]});
export const childModules = Object.freeze({"el-carmen":"./el-carmen/el-carmen.js","obarrio":"./obarrio/obarrio.js","villa-lilla":"./villa-lilla/villa-lilla.js","vista-hermosa":"./vista-hermosa/vista-hermosa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
