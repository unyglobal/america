// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"coahuila","repository":"america","path":"mexico/coahuila","depth":2,"parent":"mexico","children":["castanos","ciudad-acuna","ciudad-melchor-muzquiz","francisco-i-madero","matamoros","monclova","nava","nueva-rosita","palau","parras-de-la-fuente","piedras-negras","ramos-arizpe","sabinas","saltillo","torreon"]});
export const childModules = Object.freeze({"castanos":"./castanos/castanos.js","ciudad-acuna":"./ciudad-acuna/ciudad-acuna.js","ciudad-melchor-muzquiz":"./ciudad-melchor-muzquiz/ciudad-melchor-muzquiz.js","francisco-i-madero":"./francisco-i-madero/francisco-i-madero.js","matamoros":"./matamoros/matamoros.js","monclova":"./monclova/monclova.js","nava":"./nava/nava.js","nueva-rosita":"./nueva-rosita/nueva-rosita.js","palau":"./palau/palau.js","parras-de-la-fuente":"./parras-de-la-fuente/parras-de-la-fuente.js","piedras-negras":"./piedras-negras/piedras-negras.js","ramos-arizpe":"./ramos-arizpe/ramos-arizpe.js","sabinas":"./sabinas/sabinas.js","saltillo":"./saltillo/saltillo.js","torreon":"./torreon/torreon.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
