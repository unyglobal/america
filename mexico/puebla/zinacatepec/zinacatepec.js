// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zinacatepec","repository":"america","path":"mexico/puebla/zinacatepec","depth":3,"parent":"mexico/puebla","children":["francisco-i-madero","guadalupe","san-miguel","san-rafael","tlaxala","zentlapatl"]});
export const childModules = Object.freeze({"francisco-i-madero":"./francisco-i-madero/francisco-i-madero.js","guadalupe":"./guadalupe/guadalupe.js","san-miguel":"./san-miguel/san-miguel.js","san-rafael":"./san-rafael/san-rafael.js","tlaxala":"./tlaxala/tlaxala.js","zentlapatl":"./zentlapatl/zentlapatl.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
