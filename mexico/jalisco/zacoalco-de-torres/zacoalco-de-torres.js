// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zacoalco-de-torres","repository":"america","path":"mexico/jalisco/zacoalco-de-torres","depth":3,"parent":"mexico/jalisco","children":["barrio-de-los-camichines","cruz-verde","san-juan"]});
export const childModules = Object.freeze({"barrio-de-los-camichines":"./barrio-de-los-camichines/barrio-de-los-camichines.js","cruz-verde":"./cruz-verde/cruz-verde.js","san-juan":"./san-juan/san-juan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
