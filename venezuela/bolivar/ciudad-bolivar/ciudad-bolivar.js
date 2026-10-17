// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ciudad-bolivar","repository":"america","path":"venezuela/bolivar/ciudad-bolivar","depth":3,"parent":"venezuela/bolivar","children":["barrio-negro-primero"]});
export const childModules = Object.freeze({"barrio-negro-primero":"./barrio-negro-primero/barrio-negro-primero.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
