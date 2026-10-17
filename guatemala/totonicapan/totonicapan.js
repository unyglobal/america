// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"totonicapan","repository":"america","path":"guatemala/totonicapan","depth":2,"parent":"guatemala","children":["momostenango","san-andres-xecul","san-francisco-el-alto"]});
export const childModules = Object.freeze({"momostenango":"./momostenango/momostenango.js","san-andres-xecul":"./san-andres-xecul/san-andres-xecul.js","san-francisco-el-alto":"./san-francisco-el-alto/san-francisco-el-alto.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
