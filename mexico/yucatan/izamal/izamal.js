// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"izamal","repository":"america","path":"mexico/yucatan/izamal","depth":3,"parent":"mexico/yucatan","children":["emiliano-zapata","guadalupe","san-francisco","san-juan"]});
export const childModules = Object.freeze({"emiliano-zapata":"./emiliano-zapata/emiliano-zapata.js","guadalupe":"./guadalupe/guadalupe.js","san-francisco":"./san-francisco/san-francisco.js","san-juan":"./san-juan/san-juan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
