// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-miguel-department","repository":"america","path":"el-salvador/san-miguel-department","depth":2,"parent":"el-salvador","children":["san-miguel","san-rafael-oriente"]});
export const childModules = Object.freeze({"san-miguel":"./san-miguel/san-miguel.js","san-rafael-oriente":"./san-rafael-oriente/san-rafael-oriente.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
