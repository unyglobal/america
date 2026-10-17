// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sayula","repository":"america","path":"mexico/jalisco/sayula","depth":3,"parent":"mexico/jalisco","children":["barrio-de-la-virgencita","centro-historico","cruz-de-tacamo","cruz-verde","guadalupe","juan-rulfo","la-alameda","la-candelaria","las-palmitas","san-miguel","san-sebastian","santa-ines","santa-maria","tepeyac","veintisiete-de-septiembre"]});
export const childModules = Object.freeze({"barrio-de-la-virgencita":"./barrio-de-la-virgencita/barrio-de-la-virgencita.js","centro-historico":"./centro-historico/centro-historico.js","cruz-de-tacamo":"./cruz-de-tacamo/cruz-de-tacamo.js","cruz-verde":"./cruz-verde/cruz-verde.js","guadalupe":"./guadalupe/guadalupe.js","juan-rulfo":"./juan-rulfo/juan-rulfo.js","la-alameda":"./la-alameda/la-alameda.js","la-candelaria":"./la-candelaria/la-candelaria.js","las-palmitas":"./las-palmitas/las-palmitas.js","san-miguel":"./san-miguel/san-miguel.js","san-sebastian":"./san-sebastian/san-sebastian.js","santa-ines":"./santa-ines/santa-ines.js","santa-maria":"./santa-maria/santa-maria.js","tepeyac":"./tepeyac/tepeyac.js","veintisiete-de-septiembre":"./veintisiete-de-septiembre/veintisiete-de-septiembre.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
