// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"altepexi","repository":"america","path":"mexico/puebla/altepexi","depth":3,"parent":"mexico/puebla","children":["cristo-rey","francisco-i-madero","guadalupe","xaltepec"]});
export const childModules = Object.freeze({"cristo-rey":"./cristo-rey/cristo-rey.js","francisco-i-madero":"./francisco-i-madero/francisco-i-madero.js","guadalupe":"./guadalupe/guadalupe.js","xaltepec":"./xaltepec/xaltepec.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
