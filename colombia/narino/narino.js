// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"narino","repository":"america","path":"colombia/narino","depth":2,"parent":"colombia","children":["buesaco","el-charco","ipiales","pasto","pupiales","samaniego","san-lorenzo","tumaco","tuquerres"]});
export const childModules = Object.freeze({"buesaco":"./buesaco/buesaco.js","el-charco":"./el-charco/el-charco.js","ipiales":"./ipiales/ipiales.js","pasto":"./pasto/pasto.js","pupiales":"./pupiales/pupiales.js","samaniego":"./samaniego/samaniego.js","san-lorenzo":"./san-lorenzo/san-lorenzo.js","tumaco":"./tumaco/tumaco.js","tuquerres":"./tuquerres/tuquerres.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
