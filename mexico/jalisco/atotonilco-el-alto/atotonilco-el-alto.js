// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"atotonilco-el-alto","repository":"america","path":"mexico/jalisco/atotonilco-el-alto","depth":3,"parent":"mexico/jalisco","children":["bellavista","centro","infonavit-rojas-de-la-pena","la-alameda","la-cofradia","las-huertas","los-naranjos","riveras-de-la-unidad","sagrado-corazon-de-jesus","san-cayetano","san-felipe-de-jesus","santa-rosa"]});
export const childModules = Object.freeze({"bellavista":"./bellavista/bellavista.js","centro":"./centro/centro.js","infonavit-rojas-de-la-pena":"./infonavit-rojas-de-la-pena/infonavit-rojas-de-la-pena.js","la-alameda":"./la-alameda/la-alameda.js","la-cofradia":"./la-cofradia/la-cofradia.js","las-huertas":"./las-huertas/las-huertas.js","los-naranjos":"./los-naranjos/los-naranjos.js","riveras-de-la-unidad":"./riveras-de-la-unidad/riveras-de-la-unidad.js","sagrado-corazon-de-jesus":"./sagrado-corazon-de-jesus/sagrado-corazon-de-jesus.js","san-cayetano":"./san-cayetano/san-cayetano.js","san-felipe-de-jesus":"./san-felipe-de-jesus/san-felipe-de-jesus.js","santa-rosa":"./santa-rosa/santa-rosa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
