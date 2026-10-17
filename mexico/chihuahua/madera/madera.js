// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"madera","repository":"america","path":"mexico/chihuahua/madera","depth":3,"parent":"mexico/chihuahua","children":["centro","el-estadio","el-santuario","emiliano-zapata","la-cruz","pacifico","san-jose"]});
export const childModules = Object.freeze({"centro":"./centro/centro.js","el-estadio":"./el-estadio/el-estadio.js","el-santuario":"./el-santuario/el-santuario.js","emiliano-zapata":"./emiliano-zapata/emiliano-zapata.js","la-cruz":"./la-cruz/la-cruz.js","pacifico":"./pacifico/pacifico.js","san-jose":"./san-jose/san-jose.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
