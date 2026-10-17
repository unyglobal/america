// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"manuel-ojinaga","repository":"america","path":"mexico/chihuahua/manuel-ojinaga","depth":3,"parent":"mexico/chihuahua","children":["algodonera","constitucion","deportiva","el-chamizal","la-moderna","progreso"]});
export const childModules = Object.freeze({"algodonera":"./algodonera/algodonera.js","constitucion":"./constitucion/constitucion.js","deportiva":"./deportiva/deportiva.js","el-chamizal":"./el-chamizal/el-chamizal.js","la-moderna":"./la-moderna/la-moderna.js","progreso":"./progreso/progreso.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
