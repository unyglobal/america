// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pinotepa-nacional","repository":"america","path":"mexico/oaxaca/pinotepa-nacional","depth":3,"parent":"mexico/oaxaca","children":["barrio-del-zapote-bajo","flores-ii"]});
export const childModules = Object.freeze({"barrio-del-zapote-bajo":"./barrio-del-zapote-bajo/barrio-del-zapote-bajo.js","flores-ii":"./flores-ii/flores-ii.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
