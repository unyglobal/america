// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"miranda","repository":"america","path":"venezuela/miranda","depth":2,"parent":"venezuela","children":["ocumare-del-tuy","petare","rio-chico","san-antonio-de-los-altos","san-jose-de-barlovento","santa-teresa-del-tuy"]});
export const childModules = Object.freeze({"ocumare-del-tuy":"./ocumare-del-tuy/ocumare-del-tuy.js","petare":"./petare/petare.js","rio-chico":"./rio-chico/rio-chico.js","san-antonio-de-los-altos":"./san-antonio-de-los-altos/san-antonio-de-los-altos.js","san-jose-de-barlovento":"./san-jose-de-barlovento/san-jose-de-barlovento.js","santa-teresa-del-tuy":"./santa-teresa-del-tuy/santa-teresa-del-tuy.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
