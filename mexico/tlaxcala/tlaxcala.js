// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tlaxcala","repository":"america","path":"mexico/tlaxcala","depth":2,"parent":"mexico","children":["apizaco","calpulalpan","contla","huamantla","la-magdalena-tlaltelulco","papalotla","santa-ana-chiautempan","teolocholco","tetla","villa-vicente-guerrero","zacatelco"]});
export const childModules = Object.freeze({"apizaco":"./apizaco/apizaco.js","calpulalpan":"./calpulalpan/calpulalpan.js","contla":"./contla/contla.js","huamantla":"./huamantla/huamantla.js","la-magdalena-tlaltelulco":"./la-magdalena-tlaltelulco/la-magdalena-tlaltelulco.js","papalotla":"./papalotla/papalotla.js","santa-ana-chiautempan":"./santa-ana-chiautempan/santa-ana-chiautempan.js","teolocholco":"./teolocholco/teolocholco.js","tetla":"./tetla/tetla.js","villa-vicente-guerrero":"./villa-vicente-guerrero/villa-vicente-guerrero.js","zacatelco":"./zacatelco/zacatelco.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
