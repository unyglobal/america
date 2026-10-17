// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"misiones","repository":"america","path":"argentina/misiones","depth":2,"parent":"argentina","children":["apostoles","colonia-wanda","el-soberbio","eldorado","garupa","jardin-america","leandro-n-alem","montecarlo","obera","posadas","puerto-esperanza","puerto-iguazu","puerto-rico"]});
export const childModules = Object.freeze({"apostoles":"./apostoles/apostoles.js","colonia-wanda":"./colonia-wanda/colonia-wanda.js","el-soberbio":"./el-soberbio/el-soberbio.js","eldorado":"./eldorado/eldorado.js","garupa":"./garupa/garupa.js","jardin-america":"./jardin-america/jardin-america.js","leandro-n-alem":"./leandro-n-alem/leandro-n-alem.js","montecarlo":"./montecarlo/montecarlo.js","obera":"./obera/obera.js","posadas":"./posadas/posadas.js","puerto-esperanza":"./puerto-esperanza/puerto-esperanza.js","puerto-iguazu":"./puerto-iguazu/puerto-iguazu.js","puerto-rico":"./puerto-rico/puerto-rico.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
