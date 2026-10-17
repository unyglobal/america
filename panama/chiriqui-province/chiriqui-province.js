// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chiriqui-province","repository":"america","path":"panama/chiriqui-province","depth":2,"parent":"panama","children":["david","la-concepcion"]});
export const childModules = Object.freeze({"david":"./david/david.js","la-concepcion":"./la-concepcion/la-concepcion.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
