// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"agua-prieta","repository":"america","path":"mexico/sonora/agua-prieta","depth":3,"parent":"mexico/sonora","children":["acapulco","beltrones","burocrata","esperanza","infonavit-industrial","sal-si-puedes","vallarta"]});
export const childModules = Object.freeze({"acapulco":"./acapulco/acapulco.js","beltrones":"./beltrones/beltrones.js","burocrata":"./burocrata/burocrata.js","esperanza":"./esperanza/esperanza.js","infonavit-industrial":"./infonavit-industrial/infonavit-industrial.js","sal-si-puedes":"./sal-si-puedes/sal-si-puedes.js","vallarta":"./vallarta/vallarta.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
