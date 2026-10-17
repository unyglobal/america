// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pedro-meoqui","repository":"america","path":"mexico/chihuahua/pedro-meoqui","depth":3,"parent":"mexico/chihuahua","children":["colonia-del-carmen","ejido-meoqui","el-rincon","gonzalez","primer-anexo-ctm","zaragoza"]});
export const childModules = Object.freeze({"colonia-del-carmen":"./colonia-del-carmen/colonia-del-carmen.js","ejido-meoqui":"./ejido-meoqui/ejido-meoqui.js","el-rincon":"./el-rincon/el-rincon.js","gonzalez":"./gonzalez/gonzalez.js","primer-anexo-ctm":"./primer-anexo-ctm/primer-anexo-ctm.js","zaragoza":"./zaragoza/zaragoza.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
