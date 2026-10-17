// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"encarnacion","repository":"america","path":"paraguay/itapua/encarnacion","depth":3,"parent":"paraguay/itapua","children":["barrio-carupayty","barrio-fabril","boqueron","hospital","inmaculada-concepcion","la-catedral","villa-alegre","villa-cristina","zona-alta"]});
export const childModules = Object.freeze({"barrio-carupayty":"./barrio-carupayty/barrio-carupayty.js","barrio-fabril":"./barrio-fabril/barrio-fabril.js","boqueron":"./boqueron/boqueron.js","hospital":"./hospital/hospital.js","inmaculada-concepcion":"./inmaculada-concepcion/inmaculada-concepcion.js","la-catedral":"./la-catedral/la-catedral.js","villa-alegre":"./villa-alegre/villa-alegre.js","villa-cristina":"./villa-cristina/villa-cristina.js","zona-alta":"./zona-alta/zona-alta.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
