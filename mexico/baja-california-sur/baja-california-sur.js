// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"baja-california-sur","repository":"america","path":"mexico/baja-california-sur","depth":2,"parent":"mexico","children":["cabo-san-lucas","ciudad-constitucion","colonia-del-sol","la-paz","san-jose-del-cabo"]});
export const childModules = Object.freeze({"cabo-san-lucas":"./cabo-san-lucas/cabo-san-lucas.js","ciudad-constitucion":"./ciudad-constitucion/ciudad-constitucion.js","colonia-del-sol":"./colonia-del-sol/colonia-del-sol.js","la-paz":"./la-paz/la-paz.js","san-jose-del-cabo":"./san-jose-del-cabo/san-jose-del-cabo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
