// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"guadalajara","repository":"america","path":"mexico/jalisco/guadalajara","depth":3,"parent":"mexico/jalisco","children":["centro","el-santuario","santuario-segunda-seccion","tivoli"]});
export const childModules = Object.freeze({"centro":"./centro/centro.js","el-santuario":"./el-santuario/el-santuario.js","santuario-segunda-seccion":"./santuario-segunda-seccion/santuario-segunda-seccion.js","tivoli":"./tivoli/tivoli.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
