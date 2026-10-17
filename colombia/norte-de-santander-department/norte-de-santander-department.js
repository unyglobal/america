// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"norte-de-santander-department","repository":"america","path":"colombia/norte-de-santander-department","depth":2,"parent":"colombia","children":["cucuta","el-zulia","los-patios","ocana","pamplona","puerto-santander","villa-del-rosario"]});
export const childModules = Object.freeze({"cucuta":"./cucuta/cucuta.js","el-zulia":"./el-zulia/el-zulia.js","los-patios":"./los-patios/los-patios.js","ocana":"./ocana/ocana.js","pamplona":"./pamplona/pamplona.js","puerto-santander":"./puerto-santander/puerto-santander.js","villa-del-rosario":"./villa-del-rosario/villa-del-rosario.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
