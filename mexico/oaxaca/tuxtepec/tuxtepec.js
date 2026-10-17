// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tuxtepec","repository":"america","path":"mexico/oaxaca/tuxtepec","depth":3,"parent":"mexico/oaxaca","children":["centro","costa-verde","el-reencuentro","la-piragua","lazaro-cardenas","santa-fe"]});
export const childModules = Object.freeze({"centro":"./centro/centro.js","costa-verde":"./costa-verde/costa-verde.js","el-reencuentro":"./el-reencuentro/el-reencuentro.js","la-piragua":"./la-piragua/la-piragua.js","lazaro-cardenas":"./lazaro-cardenas/lazaro-cardenas.js","santa-fe":"./santa-fe/santa-fe.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
