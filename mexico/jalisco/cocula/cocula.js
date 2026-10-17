// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cocula","repository":"america","path":"mexico/jalisco/cocula","depth":3,"parent":"mexico/jalisco","children":["barrio-de-la-cruz","barrio-de-san-juan","centro","la-ascension","san-pedro","santiago","villa-de-cazares"]});
export const childModules = Object.freeze({"barrio-de-la-cruz":"./barrio-de-la-cruz/barrio-de-la-cruz.js","barrio-de-san-juan":"./barrio-de-san-juan/barrio-de-san-juan.js","centro":"./centro/centro.js","la-ascension":"./la-ascension/la-ascension.js","san-pedro":"./san-pedro/san-pedro.js","santiago":"./santiago/santiago.js","villa-de-cazares":"./villa-de-cazares/villa-de-cazares.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
