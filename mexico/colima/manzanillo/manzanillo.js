// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"manzanillo","repository":"america","path":"mexico/colima/manzanillo","depth":3,"parent":"mexico/colima","children":["arboledas","nuevo-salahua","pena-cobian"]});
export const childModules = Object.freeze({"arboledas":"./arboledas/arboledas.js","nuevo-salahua":"./nuevo-salahua/nuevo-salahua.js","pena-cobian":"./pena-cobian/pena-cobian.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
