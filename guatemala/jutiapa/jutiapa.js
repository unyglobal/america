// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jutiapa","repository":"america","path":"guatemala/jutiapa","depth":2,"parent":"guatemala","children":["asuncion-mita","jalpatagua"]});
export const childModules = Object.freeze({"asuncion-mita":"./asuncion-mita/asuncion-mita.js","jalpatagua":"./jalpatagua/jalpatagua.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
