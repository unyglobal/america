// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"amazonas","repository":"america","path":"peru/amazonas","depth":2,"parent":"peru","children":["bagua-grande","chachapoyas","la-peca"]});
export const childModules = Object.freeze({"bagua-grande":"./bagua-grande/bagua-grande.js","chachapoyas":"./chachapoyas/chachapoyas.js","la-peca":"./la-peca/la-peca.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
