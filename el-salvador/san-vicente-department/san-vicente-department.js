// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-vicente-department","repository":"america","path":"el-salvador/san-vicente-department","depth":2,"parent":"el-salvador","children":["san-vicente"]});
export const childModules = Object.freeze({"san-vicente":"./san-vicente/san-vicente.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
