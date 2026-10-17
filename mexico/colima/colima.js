// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"colima","repository":"america","path":"mexico/colima","depth":2,"parent":"mexico","children":["ciudad-de-armeria","ciudad-de-villa-de-alvarez","manzanillo","tecoman"]});
export const childModules = Object.freeze({"ciudad-de-armeria":"./ciudad-de-armeria/ciudad-de-armeria.js","ciudad-de-villa-de-alvarez":"./ciudad-de-villa-de-alvarez/ciudad-de-villa-de-alvarez.js","manzanillo":"./manzanillo/manzanillo.js","tecoman":"./tecoman/tecoman.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
