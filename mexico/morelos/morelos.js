// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"morelos","repository":"america","path":"mexico/morelos","depth":2,"parent":"mexico","children":["axochiapan","cuautla","cuernavaca","jiutepec","jojutla","puente-de-ixtla","santa-rosa-treinta","temixco","tlaquiltenango","tres-de-mayo","xochitepec","xoxocotla","yautepec","yecapixtla","zacatepec-de-hidalgo"]});
export const childModules = Object.freeze({"axochiapan":"./axochiapan/axochiapan.js","cuautla":"./cuautla/cuautla.js","cuernavaca":"./cuernavaca/cuernavaca.js","jiutepec":"./jiutepec/jiutepec.js","jojutla":"./jojutla/jojutla.js","puente-de-ixtla":"./puente-de-ixtla/puente-de-ixtla.js","santa-rosa-treinta":"./santa-rosa-treinta/santa-rosa-treinta.js","temixco":"./temixco/temixco.js","tlaquiltenango":"./tlaquiltenango/tlaquiltenango.js","tres-de-mayo":"./tres-de-mayo/tres-de-mayo.js","xochitepec":"./xochitepec/xochitepec.js","xoxocotla":"./xoxocotla/xoxocotla.js","yautepec":"./yautepec/yautepec.js","yecapixtla":"./yecapixtla/yecapixtla.js","zacatepec-de-hidalgo":"./zacatepec-de-hidalgo/zacatepec-de-hidalgo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
