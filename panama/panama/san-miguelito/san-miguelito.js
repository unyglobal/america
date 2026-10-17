// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-miguelito","repository":"america","path":"panama/panama/san-miguelito","depth":3,"parent":"panama/panama","children":["colina-del-golf","el-crisol","residencial-la-castellana","santa-pera"]});
export const childModules = Object.freeze({"colina-del-golf":"./colina-del-golf/colina-del-golf.js","el-crisol":"./el-crisol/el-crisol.js","residencial-la-castellana":"./residencial-la-castellana/residencial-la-castellana.js","santa-pera":"./santa-pera/santa-pera.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
