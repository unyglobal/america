// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cristo-rey","repository":"america","path":"dominican-republic/nacional/cristo-rey","depth":3,"parent":"dominican-republic/nacional","children":["arroyo-hondo","arroyo-salado","colonia-agricola","el-cachon","la-agustina"]});
export const childModules = Object.freeze({"arroyo-hondo":"./arroyo-hondo/arroyo-hondo.js","arroyo-salado":"./arroyo-salado/arroyo-salado.js","colonia-agricola":"./colonia-agricola/colonia-agricola.js","el-cachon":"./el-cachon/el-cachon.js","la-agustina":"./la-agustina/la-agustina.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
