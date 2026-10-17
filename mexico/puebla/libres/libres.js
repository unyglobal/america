// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"libres","repository":"america","path":"mexico/puebla/libres","depth":3,"parent":"mexico/puebla","children":["de-guadalupe","de-san-antonio","de-tetela","del-calvario","san-juan","san-miguel"]});
export const childModules = Object.freeze({"de-guadalupe":"./de-guadalupe/de-guadalupe.js","de-san-antonio":"./de-san-antonio/de-san-antonio.js","de-tetela":"./de-tetela/de-tetela.js","del-calvario":"./del-calvario/del-calvario.js","san-juan":"./san-juan/san-juan.js","san-miguel":"./san-miguel/san-miguel.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
