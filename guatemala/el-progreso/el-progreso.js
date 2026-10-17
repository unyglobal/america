// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"el-progreso","repository":"america","path":"guatemala/el-progreso","depth":2,"parent":"guatemala","children":["guastatoya","sanarate"]});
export const childModules = Object.freeze({"guastatoya":"./guastatoya/guastatoya.js","sanarate":"./sanarate/sanarate.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
