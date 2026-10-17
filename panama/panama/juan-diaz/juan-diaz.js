// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"juan-diaz","repository":"america","path":"panama/panama/juan-diaz","depth":3,"parent":"panama/panama","children":["ciudad-radial","el-pailon","el-porvenir","urbanizacion-anayansi","urbanizacion-el-trebol"]});
export const childModules = Object.freeze({"ciudad-radial":"./ciudad-radial/ciudad-radial.js","el-pailon":"./el-pailon/el-pailon.js","el-porvenir":"./el-porvenir/el-porvenir.js","urbanizacion-anayansi":"./urbanizacion-anayansi/urbanizacion-anayansi.js","urbanizacion-el-trebol":"./urbanizacion-el-trebol/urbanizacion-el-trebol.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
