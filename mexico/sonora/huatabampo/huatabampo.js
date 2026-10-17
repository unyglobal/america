// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"huatabampo","repository":"america","path":"mexico/sonora/huatabampo","depth":3,"parent":"mexico/sonora","children":["anselmo-macias","centro","diaz","el-alhuate","el-control","el-rastro-viejo","la-rancheria","lazaro-cardenas","obregon"]});
export const childModules = Object.freeze({"anselmo-macias":"./anselmo-macias/anselmo-macias.js","centro":"./centro/centro.js","diaz":"./diaz/diaz.js","el-alhuate":"./el-alhuate/el-alhuate.js","el-control":"./el-control/el-control.js","el-rastro-viejo":"./el-rastro-viejo/el-rastro-viejo.js","la-rancheria":"./la-rancheria/la-rancheria.js","lazaro-cardenas":"./lazaro-cardenas/lazaro-cardenas.js","obregon":"./obregon/obregon.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
