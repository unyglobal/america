// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"portuguesa","repository":"america","path":"venezuela/portuguesa","depth":2,"parent":"venezuela","children":["acarigua","araure","boconoito","guanare","guanarito","ospino","piritu","san-rafael-de-onoto","villa-bruzual"]});
export const childModules = Object.freeze({"acarigua":"./acarigua/acarigua.js","araure":"./araure/araure.js","boconoito":"./boconoito/boconoito.js","guanare":"./guanare/guanare.js","guanarito":"./guanarito/guanarito.js","ospino":"./ospino/ospino.js","piritu":"./piritu/piritu.js","san-rafael-de-onoto":"./san-rafael-de-onoto/san-rafael-de-onoto.js","villa-bruzual":"./villa-bruzual/villa-bruzual.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
