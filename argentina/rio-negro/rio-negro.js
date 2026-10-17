// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rio-negro","repository":"america","path":"argentina/rio-negro","depth":2,"parent":"argentina","children":["allen","catriel","cinco-saltos","cipolletti","el-bolson","general-roca","rio-colorado","san-antonio-oeste","san-carlos-de-bariloche","viedma","villa-regina"]});
export const childModules = Object.freeze({"allen":"./allen/allen.js","catriel":"./catriel/catriel.js","cinco-saltos":"./cinco-saltos/cinco-saltos.js","cipolletti":"./cipolletti/cipolletti.js","el-bolson":"./el-bolson/el-bolson.js","general-roca":"./general-roca/general-roca.js","rio-colorado":"./rio-colorado/rio-colorado.js","san-antonio-oeste":"./san-antonio-oeste/san-antonio-oeste.js","san-carlos-de-bariloche":"./san-carlos-de-bariloche/san-carlos-de-bariloche.js","viedma":"./viedma/viedma.js","villa-regina":"./villa-regina/villa-regina.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
