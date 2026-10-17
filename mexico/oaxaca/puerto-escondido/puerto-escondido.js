// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"puerto-escondido","repository":"america","path":"mexico/oaxaca/puerto-escondido","depth":3,"parent":"mexico/oaxaca","children":["bahia-principal","centro","el-faro","hidalgo","juarez","reforma"]});
export const childModules = Object.freeze({"bahia-principal":"./bahia-principal/bahia-principal.js","centro":"./centro/centro.js","el-faro":"./el-faro/el-faro.js","hidalgo":"./hidalgo/hidalgo.js","juarez":"./juarez/juarez.js","reforma":"./reforma/reforma.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
