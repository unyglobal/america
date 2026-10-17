// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cojedes","repository":"america","path":"venezuela/cojedes","depth":2,"parent":"venezuela","children":["el-pao","las-vegas","san-carlos","tinaco","tinaquillo"]});
export const childModules = Object.freeze({"el-pao":"./el-pao/el-pao.js","las-vegas":"./las-vegas/las-vegas.js","san-carlos":"./san-carlos/san-carlos.js","tinaco":"./tinaco/tinaco.js","tinaquillo":"./tinaquillo/tinaquillo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
