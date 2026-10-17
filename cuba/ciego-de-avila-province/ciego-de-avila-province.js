// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ciego-de-avila-province","repository":"america","path":"cuba/ciego-de-avila-province","depth":2,"parent":"cuba","children":["baragua","chambas","ciego-de-avila","ciro-redondo","florencia","moron","primero-de-enero","venezuela"]});
export const childModules = Object.freeze({"baragua":"./baragua/baragua.js","chambas":"./chambas/chambas.js","ciego-de-avila":"./ciego-de-avila/ciego-de-avila.js","ciro-redondo":"./ciro-redondo/ciro-redondo.js","florencia":"./florencia/florencia.js","moron":"./moron/moron.js","primero-de-enero":"./primero-de-enero/primero-de-enero.js","venezuela":"./venezuela/venezuela.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
