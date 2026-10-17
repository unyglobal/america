// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"david","repository":"america","path":"panama/chiriqui-province/david","depth":3,"parent":"panama/chiriqui-province","children":["el-barrero","el-carmen","el-santo","el-vedado","san-mateo","urbanizacion-la-feria","urbanizacion-santa-rosa"]});
export const childModules = Object.freeze({"el-barrero":"./el-barrero/el-barrero.js","el-carmen":"./el-carmen/el-carmen.js","el-santo":"./el-santo/el-santo.js","el-vedado":"./el-vedado/el-vedado.js","san-mateo":"./san-mateo/san-mateo.js","urbanizacion-la-feria":"./urbanizacion-la-feria/urbanizacion-la-feria.js","urbanizacion-santa-rosa":"./urbanizacion-santa-rosa/urbanizacion-santa-rosa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
