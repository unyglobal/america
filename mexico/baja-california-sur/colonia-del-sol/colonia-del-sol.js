// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"colonia-del-sol","repository":"america","path":"mexico/baja-california-sur/colonia-del-sol","depth":3,"parent":"mexico/baja-california-sur","children":["jardines-del-sol","lomas-del-sol","magisterio","misiones-de-santa-fe"]});
export const childModules = Object.freeze({"jardines-del-sol":"./jardines-del-sol/jardines-del-sol.js","lomas-del-sol":"./lomas-del-sol/lomas-del-sol.js","magisterio":"./magisterio/magisterio.js","misiones-de-santa-fe":"./misiones-de-santa-fe/misiones-de-santa-fe.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
