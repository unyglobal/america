// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mazatlan","repository":"america","path":"mexico/sinaloa/mazatlan","depth":3,"parent":"mexico/sinaloa","children":["brisas-del-mar","campo-bello","estero","ferrocarrilera","independencia","juan-carrasco","libertad","lomas-del-mar","palmeiras","palos-prietos","san-angel","sanchez-taboada","telleria"]});
export const childModules = Object.freeze({"brisas-del-mar":"./brisas-del-mar/brisas-del-mar.js","campo-bello":"./campo-bello/campo-bello.js","estero":"./estero/estero.js","ferrocarrilera":"./ferrocarrilera/ferrocarrilera.js","independencia":"./independencia/independencia.js","juan-carrasco":"./juan-carrasco/juan-carrasco.js","libertad":"./libertad/libertad.js","lomas-del-mar":"./lomas-del-mar/lomas-del-mar.js","palmeiras":"./palmeiras/palmeiras.js","palos-prietos":"./palos-prietos/palos-prietos.js","san-angel":"./san-angel/san-angel.js","sanchez-taboada":"./sanchez-taboada/sanchez-taboada.js","telleria":"./telleria/telleria.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
