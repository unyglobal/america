// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"el-estor","repository":"america","path":"guatemala/izabal-department/el-estor","depth":3,"parent":"guatemala/izabal-department","children":["los-cerritos","san-jorge"]});
export const childModules = Object.freeze({"los-cerritos":"./los-cerritos/los-cerritos.js","san-jorge":"./san-jorge/san-jorge.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
