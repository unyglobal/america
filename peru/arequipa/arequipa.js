// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"arequipa","repository":"america","path":"peru/arequipa","depth":2,"parent":"peru","children":["camana","ciudad-satelite","cono-norte","el-pedregal","jacobo-hunter","mollendo","selva-alegre"]});
export const childModules = Object.freeze({"camana":"./camana/camana.js","ciudad-satelite":"./ciudad-satelite/ciudad-satelite.js","cono-norte":"./cono-norte/cono-norte.js","el-pedregal":"./el-pedregal/el-pedregal.js","jacobo-hunter":"./jacobo-hunter/jacobo-hunter.js","mollendo":"./mollendo/mollendo.js","selva-alegre":"./selva-alegre/selva-alegre.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
