// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chiconcuac","repository":"america","path":"mexico/mexico/chiconcuac","depth":3,"parent":"mexico/mexico","children":["emiliano-zapata","san-miguel","san-pedro"]});
export const childModules = Object.freeze({"emiliano-zapata":"./emiliano-zapata/emiliano-zapata.js","san-miguel":"./san-miguel/san-miguel.js","san-pedro":"./san-pedro/san-pedro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
