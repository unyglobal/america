// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"barinas","repository":"america","path":"venezuela/barinas","depth":2,"parent":"venezuela","children":["alto-barinas","barinitas","ciudad-bolivia","obispos","sabaneta","santa-barbara","socopo"]});
export const childModules = Object.freeze({"alto-barinas":"./alto-barinas/alto-barinas.js","barinitas":"./barinitas/barinitas.js","ciudad-bolivia":"./ciudad-bolivia/ciudad-bolivia.js","obispos":"./obispos/obispos.js","sabaneta":"./sabaneta/sabaneta.js","santa-barbara":"./santa-barbara/santa-barbara.js","socopo":"./socopo/socopo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
