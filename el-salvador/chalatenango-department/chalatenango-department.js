// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chalatenango-department","repository":"america","path":"el-salvador/chalatenango-department","depth":2,"parent":"el-salvador","children":["chalatenango"]});
export const childModules = Object.freeze({"chalatenango":"./chalatenango/chalatenango.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
