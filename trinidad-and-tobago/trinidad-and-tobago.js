// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"trinidad-and-tobago","repository":"america","path":"trinidad-and-tobago","depth":1,"parent":"","children":["borough-of-arima","chaguanas","diego-martin-regional-corporation","mayaro","point-fortin","port-of-spain","san-fernando","san-juan-laventille","sangre-grande-regional-corporation","tobago","tunapuna-piarco"]});
export const childModules = Object.freeze({"borough-of-arima":"./borough-of-arima/borough-of-arima.js","chaguanas":"./chaguanas/chaguanas.js","diego-martin-regional-corporation":"./diego-martin-regional-corporation/diego-martin-regional-corporation.js","mayaro":"./mayaro/mayaro.js","point-fortin":"./point-fortin/point-fortin.js","port-of-spain":"./port-of-spain/port-of-spain.js","san-fernando":"./san-fernando/san-fernando.js","san-juan-laventille":"./san-juan-laventille/san-juan-laventille.js","sangre-grande-regional-corporation":"./sangre-grande-regional-corporation/sangre-grande-regional-corporation.js","tobago":"./tobago/tobago.js","tunapuna-piarco":"./tunapuna-piarco/tunapuna-piarco.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
