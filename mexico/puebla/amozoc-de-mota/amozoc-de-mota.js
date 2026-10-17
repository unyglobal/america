// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"amozoc-de-mota","repository":"america","path":"mexico/puebla/amozoc-de-mota","depth":3,"parent":"mexico/puebla","children":["sagrada-familia","san-antonio","san-miguel","santo-angel"]});
export const childModules = Object.freeze({"sagrada-familia":"./sagrada-familia/sagrada-familia.js","san-antonio":"./san-antonio/san-antonio.js","san-miguel":"./san-miguel/san-miguel.js","santo-angel":"./santo-angel/santo-angel.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
