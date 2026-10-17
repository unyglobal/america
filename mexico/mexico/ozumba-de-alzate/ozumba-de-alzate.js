// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ozumba-de-alzate","repository":"america","path":"mexico/mexico/ozumba-de-alzate","depth":3,"parent":"mexico/mexico","children":["san-martin","san-pedro"]});
export const childModules = Object.freeze({"san-martin":"./san-martin/san-martin.js","san-pedro":"./san-pedro/san-pedro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
