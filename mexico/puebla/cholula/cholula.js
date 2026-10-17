// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cholula","repository":"america","path":"mexico/puebla/cholula","depth":3,"parent":"mexico/puebla","children":["los-frailes","san-diego","santiago-mixquitla"]});
export const childModules = Object.freeze({"los-frailes":"./los-frailes/los-frailes.js","san-diego":"./san-diego/san-diego.js","santiago-mixquitla":"./santiago-mixquitla/santiago-mixquitla.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
