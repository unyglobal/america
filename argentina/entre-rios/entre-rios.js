// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"entre-rios","repository":"america","path":"argentina/entre-rios","depth":2,"parent":"argentina","children":["chajari","concepcion-del-uruguay","concordia","crespo","diamante","federal","gualeguay","gualeguaychu","la-paz","nogoya","parana","santa-elena","victoria","villaguay"]});
export const childModules = Object.freeze({"chajari":"./chajari/chajari.js","concepcion-del-uruguay":"./concepcion-del-uruguay/concepcion-del-uruguay.js","concordia":"./concordia/concordia.js","crespo":"./crespo/crespo.js","diamante":"./diamante/diamante.js","federal":"./federal/federal.js","gualeguay":"./gualeguay/gualeguay.js","gualeguaychu":"./gualeguaychu/gualeguaychu.js","la-paz":"./la-paz/la-paz.js","nogoya":"./nogoya/nogoya.js","parana":"./parana/parana.js","santa-elena":"./santa-elena/santa-elena.js","victoria":"./victoria/victoria.js","villaguay":"./villaguay/villaguay.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
