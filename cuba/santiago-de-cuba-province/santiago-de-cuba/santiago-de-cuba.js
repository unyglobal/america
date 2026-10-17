// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"santiago-de-cuba","repository":"america","path":"cuba/santiago-de-cuba-province/santiago-de-cuba","depth":3,"parent":"cuba/santiago-de-cuba-province","children":["reparto-desi","reparto-la-asuncion","reparto-municipal","reparto-veguita-de-galo","reparto-villa-lon"]});
export const childModules = Object.freeze({"reparto-desi":"./reparto-desi/reparto-desi.js","reparto-la-asuncion":"./reparto-la-asuncion/reparto-la-asuncion.js","reparto-municipal":"./reparto-municipal/reparto-municipal.js","reparto-veguita-de-galo":"./reparto-veguita-de-galo/reparto-veguita-de-galo.js","reparto-villa-lon":"./reparto-villa-lon/reparto-villa-lon.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
