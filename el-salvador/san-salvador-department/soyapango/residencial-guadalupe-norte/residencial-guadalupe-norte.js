// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"residencial-guadalupe-norte","repository":"america","path":"el-salvador/san-salvador-department/soyapango/residencial-guadalupe-norte","depth":4,"parent":"el-salvador/san-salvador-department/soyapango","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
