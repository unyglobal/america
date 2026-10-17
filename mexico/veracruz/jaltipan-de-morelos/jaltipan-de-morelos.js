// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jaltipan-de-morelos","repository":"america","path":"mexico/veracruz/jaltipan-de-morelos","depth":3,"parent":"mexico/veracruz","children":["adolfo-lopez-mateos","cardenista","centro","deportiva","las-conchitas","obrera","oloxochita","san-cristobal","san-miguel","siete-pozos"]});
export const childModules = Object.freeze({"adolfo-lopez-mateos":"./adolfo-lopez-mateos/adolfo-lopez-mateos.js","cardenista":"./cardenista/cardenista.js","centro":"./centro/centro.js","deportiva":"./deportiva/deportiva.js","las-conchitas":"./las-conchitas/las-conchitas.js","obrera":"./obrera/obrera.js","oloxochita":"./oloxochita/oloxochita.js","san-cristobal":"./san-cristobal/san-cristobal.js","san-miguel":"./san-miguel/san-miguel.js","siete-pozos":"./siete-pozos/siete-pozos.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
