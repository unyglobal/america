// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"comayagua-department","repository":"america","path":"honduras/comayagua-department","depth":2,"parent":"honduras","children":["comayagua","el-rosario","esquias","siguatepeque","villa-de-san-antonio"]});
export const childModules = Object.freeze({"comayagua":"./comayagua/comayagua.js","el-rosario":"./el-rosario/el-rosario.js","esquias":"./esquias/esquias.js","siguatepeque":"./siguatepeque/siguatepeque.js","villa-de-san-antonio":"./villa-de-san-antonio/villa-de-san-antonio.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
