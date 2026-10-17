// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-miguel","repository":"america","path":"el-salvador/san-miguel-department/san-miguel","depth":3,"parent":"el-salvador/san-miguel-department","children":["colonia-ciudad-jardin","colonia-conde"]});
export const childModules = Object.freeze({"colonia-ciudad-jardin":"./colonia-ciudad-jardin/colonia-ciudad-jardin.js","colonia-conde":"./colonia-conde/colonia-conde.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
