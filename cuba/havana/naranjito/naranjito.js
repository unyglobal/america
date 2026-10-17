// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"naranjito","repository":"america","path":"cuba/havana/naranjito","depth":3,"parent":"cuba/havana","children":["el-sevillano","mira-flores-nuevo"]});
export const childModules = Object.freeze({"el-sevillano":"./el-sevillano/el-sevillano.js","mira-flores-nuevo":"./mira-flores-nuevo/mira-flores-nuevo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
