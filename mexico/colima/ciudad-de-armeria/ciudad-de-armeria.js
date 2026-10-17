// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ciudad-de-armeria","repository":"america","path":"mexico/colima/ciudad-de-armeria","depth":3,"parent":"mexico/colima","children":["centro","cristo-rey","ejido-armeria","el-campanario","el-pelillo","gregorio-torres-quintero","independencia","la-limonera","las-primaveras","linda-vista"]});
export const childModules = Object.freeze({"centro":"./centro/centro.js","cristo-rey":"./cristo-rey/cristo-rey.js","ejido-armeria":"./ejido-armeria/ejido-armeria.js","el-campanario":"./el-campanario/el-campanario.js","el-pelillo":"./el-pelillo/el-pelillo.js","gregorio-torres-quintero":"./gregorio-torres-quintero/gregorio-torres-quintero.js","independencia":"./independencia/independencia.js","la-limonera":"./la-limonera/la-limonera.js","las-primaveras":"./las-primaveras/las-primaveras.js","linda-vista":"./linda-vista/linda-vista.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
