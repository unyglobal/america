// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cabo-san-lucas","repository":"america","path":"mexico/baja-california-sur/cabo-san-lucas","depth":3,"parent":"mexico/baja-california-sur","children":["ampliacion-juarez","centro","el-medano-ejidal","ildefonso-green","juarez","lienzo-charro"]});
export const childModules = Object.freeze({"ampliacion-juarez":"./ampliacion-juarez/ampliacion-juarez.js","centro":"./centro/centro.js","el-medano-ejidal":"./el-medano-ejidal/el-medano-ejidal.js","ildefonso-green":"./ildefonso-green/ildefonso-green.js","juarez":"./juarez/juarez.js","lienzo-charro":"./lienzo-charro/lienzo-charro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
