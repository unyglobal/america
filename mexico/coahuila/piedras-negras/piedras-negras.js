// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"piedras-negras","repository":"america","path":"mexico/coahuila/piedras-negras","depth":3,"parent":"mexico/coahuila","children":["burocrata","burocrata-ampliacion","croc-ii","gonzalez","infonavit-fuentes","las-fuentes","nisperos","roma","zona-centro"]});
export const childModules = Object.freeze({"burocrata":"./burocrata/burocrata.js","burocrata-ampliacion":"./burocrata-ampliacion/burocrata-ampliacion.js","croc-ii":"./croc-ii/croc-ii.js","gonzalez":"./gonzalez/gonzalez.js","infonavit-fuentes":"./infonavit-fuentes/infonavit-fuentes.js","las-fuentes":"./las-fuentes/las-fuentes.js","nisperos":"./nisperos/nisperos.js","roma":"./roma/roma.js","zona-centro":"./zona-centro/zona-centro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
