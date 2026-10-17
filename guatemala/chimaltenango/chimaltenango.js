// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chimaltenango","repository":"america","path":"guatemala/chimaltenango","depth":2,"parent":"guatemala","children":["comalapa","el-tejar","patzicia","patzun","san-andres-itzapa","tecpan-guatemala","yepocapa","zaragoza"]});
export const childModules = Object.freeze({"comalapa":"./comalapa/comalapa.js","el-tejar":"./el-tejar/el-tejar.js","patzicia":"./patzicia/patzicia.js","patzun":"./patzun/patzun.js","san-andres-itzapa":"./san-andres-itzapa/san-andres-itzapa.js","tecpan-guatemala":"./tecpan-guatemala/tecpan-guatemala.js","yepocapa":"./yepocapa/yepocapa.js","zaragoza":"./zaragoza/zaragoza.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
