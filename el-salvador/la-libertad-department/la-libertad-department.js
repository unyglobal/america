// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"la-libertad-department","repository":"america","path":"el-salvador/la-libertad-department","depth":2,"parent":"el-salvador","children":["antiguo-cuscatlan","la-libertad","quezaltepeque","santa-tecla"]});
export const childModules = Object.freeze({"antiguo-cuscatlan":"./antiguo-cuscatlan/antiguo-cuscatlan.js","la-libertad":"./la-libertad/la-libertad.js","quezaltepeque":"./quezaltepeque/quezaltepeque.js","santa-tecla":"./santa-tecla/santa-tecla.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
