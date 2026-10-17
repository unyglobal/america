// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"araucania","repository":"america","path":"chile/araucania","depth":2,"parent":"chile","children":["angol","carahue","collipulli","cunco","freire","labranza","lautaro","loncoche","nueva-imperial","padre-las-casas","pitrufquen","pucon","temuco","teodoro-schmidt","traiguen","victoria","vilcun","villarrica"]});
export const childModules = Object.freeze({"angol":"./angol/angol.js","carahue":"./carahue/carahue.js","collipulli":"./collipulli/collipulli.js","cunco":"./cunco/cunco.js","freire":"./freire/freire.js","labranza":"./labranza/labranza.js","lautaro":"./lautaro/lautaro.js","loncoche":"./loncoche/loncoche.js","nueva-imperial":"./nueva-imperial/nueva-imperial.js","padre-las-casas":"./padre-las-casas/padre-las-casas.js","pitrufquen":"./pitrufquen/pitrufquen.js","pucon":"./pucon/pucon.js","temuco":"./temuco/temuco.js","teodoro-schmidt":"./teodoro-schmidt/teodoro-schmidt.js","traiguen":"./traiguen/traiguen.js","victoria":"./victoria/victoria.js","vilcun":"./vilcun/vilcun.js","villarrica":"./villarrica/villarrica.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
