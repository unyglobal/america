// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"santiago-province","repository":"america","path":"dominican-republic/santiago-province","depth":2,"parent":"dominican-republic","children":["santiago-de-los-caballeros","tamboril","villa-bisono"]});
export const childModules = Object.freeze({"santiago-de-los-caballeros":"./santiago-de-los-caballeros/santiago-de-los-caballeros.js","tamboril":"./tamboril/tamboril.js","villa-bisono":"./villa-bisono/villa-bisono.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
