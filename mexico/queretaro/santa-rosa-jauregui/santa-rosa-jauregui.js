// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"santa-rosa-jauregui","repository":"america","path":"mexico/queretaro/santa-rosa-jauregui","depth":3,"parent":"mexico/queretaro","children":["benito-juarez","continental","corregidora","el-pedregal","francisco-villa","la-cruz","la-loma","las-flores","las-rosas","lomas-del-pedregal","los-angeles","santa-lucia","valle-colorado"]});
export const childModules = Object.freeze({"benito-juarez":"./benito-juarez/benito-juarez.js","continental":"./continental/continental.js","corregidora":"./corregidora/corregidora.js","el-pedregal":"./el-pedregal/el-pedregal.js","francisco-villa":"./francisco-villa/francisco-villa.js","la-cruz":"./la-cruz/la-cruz.js","la-loma":"./la-loma/la-loma.js","las-flores":"./las-flores/las-flores.js","las-rosas":"./las-rosas/las-rosas.js","lomas-del-pedregal":"./lomas-del-pedregal/lomas-del-pedregal.js","los-angeles":"./los-angeles/los-angeles.js","santa-lucia":"./santa-lucia/santa-lucia.js","valle-colorado":"./valle-colorado/valle-colorado.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
