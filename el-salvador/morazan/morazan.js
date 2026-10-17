// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"morazan","repository":"america","path":"el-salvador/morazan","depth":2,"parent":"el-salvador","children":["san-francisco"]});
export const childModules = Object.freeze({"san-francisco":"./san-francisco/san-francisco.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
