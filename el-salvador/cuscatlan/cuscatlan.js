// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cuscatlan","repository":"america","path":"el-salvador/cuscatlan","depth":2,"parent":"el-salvador","children":["cojutepeque","san-martin"]});
export const childModules = Object.freeze({"cojutepeque":"./cojutepeque/cojutepeque.js","san-martin":"./san-martin/san-martin.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
