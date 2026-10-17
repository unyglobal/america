// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"caaguazu-department","repository":"america","path":"paraguay/caaguazu-department","depth":2,"parent":"paraguay","children":["caaguazu","coronel-oviedo","doctor-juan-eulogio-estigarribia"]});
export const childModules = Object.freeze({"caaguazu":"./caaguazu/caaguazu.js","coronel-oviedo":"./coronel-oviedo/coronel-oviedo.js","doctor-juan-eulogio-estigarribia":"./doctor-juan-eulogio-estigarribia/doctor-juan-eulogio-estigarribia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
