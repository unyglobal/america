// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-antonio-del-tachira","repository":"america","path":"venezuela/tachira/san-antonio-del-tachira","depth":3,"parent":"venezuela/tachira","children":["barrio-corea","barrio-cristo-rey","barrio-curazao","barrio-francisco-de-miranda","barrio-la-lagunita","barrio-la-popita","barrio-los-chipios","barrio-pinto-salinas","barrio-ricaurte","barrio-simon-bolivar","urbanizacion-antonio-jose-de-sucre"]});
export const childModules = Object.freeze({"barrio-corea":"./barrio-corea/barrio-corea.js","barrio-cristo-rey":"./barrio-cristo-rey/barrio-cristo-rey.js","barrio-curazao":"./barrio-curazao/barrio-curazao.js","barrio-francisco-de-miranda":"./barrio-francisco-de-miranda/barrio-francisco-de-miranda.js","barrio-la-lagunita":"./barrio-la-lagunita/barrio-la-lagunita.js","barrio-la-popita":"./barrio-la-popita/barrio-la-popita.js","barrio-los-chipios":"./barrio-los-chipios/barrio-los-chipios.js","barrio-pinto-salinas":"./barrio-pinto-salinas/barrio-pinto-salinas.js","barrio-ricaurte":"./barrio-ricaurte/barrio-ricaurte.js","barrio-simon-bolivar":"./barrio-simon-bolivar/barrio-simon-bolivar.js","urbanizacion-antonio-jose-de-sucre":"./urbanizacion-antonio-jose-de-sucre/urbanizacion-antonio-jose-de-sucre.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
