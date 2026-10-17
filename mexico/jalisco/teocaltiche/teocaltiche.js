// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"teocaltiche","repository":"america","path":"mexico/jalisco/teocaltiche","depth":3,"parent":"mexico/jalisco","children":["bellavista","centro","el-nejayote","el-santuario","el-tanque","juarez","los-maestros","san-jose","san-miguel","tavares"]});
export const childModules = Object.freeze({"bellavista":"./bellavista/bellavista.js","centro":"./centro/centro.js","el-nejayote":"./el-nejayote/el-nejayote.js","el-santuario":"./el-santuario/el-santuario.js","el-tanque":"./el-tanque/el-tanque.js","juarez":"./juarez/juarez.js","los-maestros":"./los-maestros/los-maestros.js","san-jose":"./san-jose/san-jose.js","san-miguel":"./san-miguel/san-miguel.js","tavares":"./tavares/tavares.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
