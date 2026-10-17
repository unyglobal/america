// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"el-bajio","repository":"america","path":"mexico/zacatecas/nochistlan-de-mejia/el-bajio","depth":4,"parent":"mexico/zacatecas/nochistlan-de-mejia","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
