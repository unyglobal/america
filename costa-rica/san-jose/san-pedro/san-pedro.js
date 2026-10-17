// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-pedro","repository":"america","path":"costa-rica/san-jose/san-pedro","depth":3,"parent":"costa-rica/san-jose","children":["ciudad-universitaria","fuentes","prado"]});
export const childModules = Object.freeze({"ciudad-universitaria":"./ciudad-universitaria/ciudad-universitaria.js","fuentes":"./fuentes/fuentes.js","prado":"./prado/prado.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
