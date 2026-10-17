// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ouest","repository":"america","path":"haiti/ouest","depth":2,"parent":"haiti","children":["arcahaie","carrefour","cite-soleil","croix-des-bouquets","delmas","fond-parisien","grangwav","gressier","kenscoff","leogane","petionville","port-au-prince","thomazeau","tigwav"]});
export const childModules = Object.freeze({"arcahaie":"./arcahaie/arcahaie.js","carrefour":"./carrefour/carrefour.js","cite-soleil":"./cite-soleil/cite-soleil.js","croix-des-bouquets":"./croix-des-bouquets/croix-des-bouquets.js","delmas":"./delmas/delmas.js","fond-parisien":"./fond-parisien/fond-parisien.js","grangwav":"./grangwav/grangwav.js","gressier":"./gressier/gressier.js","kenscoff":"./kenscoff/kenscoff.js","leogane":"./leogane/leogane.js","petionville":"./petionville/petionville.js","port-au-prince":"./port-au-prince/port-au-prince.js","thomazeau":"./thomazeau/thomazeau.js","tigwav":"./tigwav/tigwav.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
