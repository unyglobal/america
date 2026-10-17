// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"envigado","repository":"america","path":"colombia/antioquia/envigado","depth":3,"parent":"colombia/antioquia","children":["alcala","andalucia","bucares","cervantes","conjunto-residencial-luna-verde","jardines","la-magnolia","peldar","pontevedra","portal","san-marcos","sofasa","villa-santa-teresa"]});
export const childModules = Object.freeze({"alcala":"./alcala/alcala.js","andalucia":"./andalucia/andalucia.js","bucares":"./bucares/bucares.js","cervantes":"./cervantes/cervantes.js","conjunto-residencial-luna-verde":"./conjunto-residencial-luna-verde/conjunto-residencial-luna-verde.js","jardines":"./jardines/jardines.js","la-magnolia":"./la-magnolia/la-magnolia.js","peldar":"./peldar/peldar.js","pontevedra":"./pontevedra/pontevedra.js","portal":"./portal/portal.js","san-marcos":"./san-marcos/san-marcos.js","sofasa":"./sofasa/sofasa.js","villa-santa-teresa":"./villa-santa-teresa/villa-santa-teresa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
