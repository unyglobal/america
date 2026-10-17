// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yurecuaro","repository":"america","path":"mexico/michoacan/yurecuaro","depth":3,"parent":"mexico/michoacan","children":["centro","el-jacalon","la-loma","magisterial","mezquite-grande"]});
export const childModules = Object.freeze({"centro":"./centro/centro.js","el-jacalon":"./el-jacalon/el-jacalon.js","la-loma":"./la-loma/la-loma.js","magisterial":"./magisterial/magisterial.js","mezquite-grande":"./mezquite-grande/mezquite-grande.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
