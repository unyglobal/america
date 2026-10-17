// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"puno","repository":"america","path":"peru/puno","depth":2,"parent":"peru","children":["ayaviri","ilave","juliaca","la-rinconada","san-miguel"]});
export const childModules = Object.freeze({"ayaviri":"./ayaviri/ayaviri.js","ilave":"./ilave/ilave.js","juliaca":"./juliaca/juliaca.js","la-rinconada":"./la-rinconada/la-rinconada.js","san-miguel":"./san-miguel/san-miguel.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
