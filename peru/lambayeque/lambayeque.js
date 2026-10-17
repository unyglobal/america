// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lambayeque","repository":"america","path":"peru/lambayeque","depth":2,"parent":"peru","children":["chiclayo","chongoyape","ferrenafe","monsefu","patapo","picsi","pimentel","sana"]});
export const childModules = Object.freeze({"chiclayo":"./chiclayo/chiclayo.js","chongoyape":"./chongoyape/chongoyape.js","ferrenafe":"./ferrenafe/ferrenafe.js","monsefu":"./monsefu/monsefu.js","patapo":"./patapo/patapo.js","picsi":"./picsi/picsi.js","pimentel":"./pimentel/pimentel.js","sana":"./sana/sana.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
