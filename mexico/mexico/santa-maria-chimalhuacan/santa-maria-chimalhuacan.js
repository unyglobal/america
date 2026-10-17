// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"santa-maria-chimalhuacan","repository":"america","path":"mexico/mexico/santa-maria-chimalhuacan","depth":3,"parent":"mexico/mexico","children":["san-juan","san-pablo","san-pedro"]});
export const childModules = Object.freeze({"san-juan":"./san-juan/san-juan.js","san-pablo":"./san-pablo/san-pablo.js","san-pedro":"./san-pedro/san-pedro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
