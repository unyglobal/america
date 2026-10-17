// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lagos-de-moreno","repository":"america","path":"mexico/jalisco/lagos-de-moreno","depth":3,"parent":"mexico/jalisco","children":["centro","colonia-de-la-luz","colonia-del-carmen","colonia-del-panteon","cuesta-blanca","el-calvario","el-mosaico","san-felipe","san-miguel"]});
export const childModules = Object.freeze({"centro":"./centro/centro.js","colonia-de-la-luz":"./colonia-de-la-luz/colonia-de-la-luz.js","colonia-del-carmen":"./colonia-del-carmen/colonia-del-carmen.js","colonia-del-panteon":"./colonia-del-panteon/colonia-del-panteon.js","cuesta-blanca":"./cuesta-blanca/cuesta-blanca.js","el-calvario":"./el-calvario/el-calvario.js","el-mosaico":"./el-mosaico/el-mosaico.js","san-felipe":"./san-felipe/san-felipe.js","san-miguel":"./san-miguel/san-miguel.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
