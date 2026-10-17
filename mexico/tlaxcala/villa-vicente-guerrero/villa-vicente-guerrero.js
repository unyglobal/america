// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"villa-vicente-guerrero","repository":"america","path":"mexico/tlaxcala/villa-vicente-guerrero","depth":3,"parent":"mexico/tlaxcala","children":["jesus","la-santisima","san-miguel","san-pedro"]});
export const childModules = Object.freeze({"jesus":"./jesus/jesus.js","la-santisima":"./la-santisima/la-santisima.js","san-miguel":"./san-miguel/san-miguel.js","san-pedro":"./san-pedro/san-pedro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
