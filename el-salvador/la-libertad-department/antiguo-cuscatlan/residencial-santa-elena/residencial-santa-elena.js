// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"residencial-santa-elena","repository":"america","path":"el-salvador/la-libertad-department/antiguo-cuscatlan/residencial-santa-elena","depth":4,"parent":"el-salvador/la-libertad-department/antiguo-cuscatlan","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
