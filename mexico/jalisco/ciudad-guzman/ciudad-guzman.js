// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ciudad-guzman","repository":"america","path":"mexico/jalisco/ciudad-guzman","depth":3,"parent":"mexico/jalisco","children":["centro","cristo-rey","cruz-blanca","molino-viejo","san-pedro","santa-rosa","valle-del-sol","zapotlan-el-grande"]});
export const childModules = Object.freeze({"centro":"./centro/centro.js","cristo-rey":"./cristo-rey/cristo-rey.js","cruz-blanca":"./cruz-blanca/cruz-blanca.js","molino-viejo":"./molino-viejo/molino-viejo.js","san-pedro":"./san-pedro/san-pedro.js","santa-rosa":"./santa-rosa/santa-rosa.js","valle-del-sol":"./valle-del-sol/valle-del-sol.js","zapotlan-el-grande":"./zapotlan-el-grande/zapotlan-el-grande.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
