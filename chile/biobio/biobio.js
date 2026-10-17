// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"biobio","repository":"america","path":"chile/biobio","depth":2,"parent":"chile","children":["arauco","cabrero","chiguayante","concepcion","coronel","curanilahue","hualpen","hualqui","lebu","los-alamos","los-angeles","lota","mulchen","nacimiento","penco","san-pedro-de-la-paz","talcahuano","tome","villa-mercedes"]});
export const childModules = Object.freeze({"arauco":"./arauco/arauco.js","cabrero":"./cabrero/cabrero.js","chiguayante":"./chiguayante/chiguayante.js","concepcion":"./concepcion/concepcion.js","coronel":"./coronel/coronel.js","curanilahue":"./curanilahue/curanilahue.js","hualpen":"./hualpen/hualpen.js","hualqui":"./hualqui/hualqui.js","lebu":"./lebu/lebu.js","los-alamos":"./los-alamos/los-alamos.js","los-angeles":"./los-angeles/los-angeles.js","lota":"./lota/lota.js","mulchen":"./mulchen/mulchen.js","nacimiento":"./nacimiento/nacimiento.js","penco":"./penco/penco.js","san-pedro-de-la-paz":"./san-pedro-de-la-paz/san-pedro-de-la-paz.js","talcahuano":"./talcahuano/talcahuano.js","tome":"./tome/tome.js","villa-mercedes":"./villa-mercedes/villa-mercedes.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
