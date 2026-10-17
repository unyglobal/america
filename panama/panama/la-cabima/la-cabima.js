// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"la-cabima","repository":"america","path":"panama/panama/la-cabima","depth":3,"parent":"panama/panama","children":["cumbres-del-este-numero-dos","paseo-de-las-camelias","villa-acuario"]});
export const childModules = Object.freeze({"cumbres-del-este-numero-dos":"./cumbres-del-este-numero-dos/cumbres-del-este-numero-dos.js","paseo-de-las-camelias":"./paseo-de-las-camelias/paseo-de-las-camelias.js","villa-acuario":"./villa-acuario/villa-acuario.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
