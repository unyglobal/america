// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"la-cruz","repository":"america","path":"mexico/sinaloa/la-cruz","depth":3,"parent":"mexico/sinaloa","children":["centro","colinas-del-rio","francisco-i-madero","guadalupe-victoria","los-arroyitos","margarita","miramar","palos-blancos","pedregal","santa-cruz","victor-manuel-quintero"]});
export const childModules = Object.freeze({"centro":"./centro/centro.js","colinas-del-rio":"./colinas-del-rio/colinas-del-rio.js","francisco-i-madero":"./francisco-i-madero/francisco-i-madero.js","guadalupe-victoria":"./guadalupe-victoria/guadalupe-victoria.js","los-arroyitos":"./los-arroyitos/los-arroyitos.js","margarita":"./margarita/margarita.js","miramar":"./miramar/miramar.js","palos-blancos":"./palos-blancos/palos-blancos.js","pedregal":"./pedregal/pedregal.js","santa-cruz":"./santa-cruz/santa-cruz.js","victor-manuel-quintero":"./victor-manuel-quintero/victor-manuel-quintero.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
