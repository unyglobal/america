// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bolivia","repository":"america","path":"bolivia","depth":1,"parent":"","children":["beni-department","chuquisaca-department","cochabamba","la-paz-department","oruro","pando","potosi-department","santa-cruz-department","tarija-department"]});
export const childModules = Object.freeze({"beni-department":"./beni-department/beni-department.js","chuquisaca-department":"./chuquisaca-department/chuquisaca-department.js","cochabamba":"./cochabamba/cochabamba.js","la-paz-department":"./la-paz-department/la-paz-department.js","oruro":"./oruro/oruro.js","pando":"./pando/pando.js","potosi-department":"./potosi-department/potosi-department.js","santa-cruz-department":"./santa-cruz-department/santa-cruz-department.js","tarija-department":"./tarija-department/tarija-department.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
