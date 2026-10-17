// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"villa-consuelo","repository":"america","path":"dominican-republic/nacional/villa-consuelo","depth":3,"parent":"dominican-republic/nacional","children":["barrio-mejoraminto-social","la-faria","villa-maria"]});
export const childModules = Object.freeze({"barrio-mejoraminto-social":"./barrio-mejoraminto-social/barrio-mejoraminto-social.js","la-faria":"./la-faria/la-faria.js","villa-maria":"./villa-maria/villa-maria.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
