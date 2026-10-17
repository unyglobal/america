// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"acajete","repository":"america","path":"mexico/puebla/acajete","depth":3,"parent":"mexico/puebla","children":["de-jesus","san-juan","santo-entierro"]});
export const childModules = Object.freeze({"de-jesus":"./de-jesus/de-jesus.js","san-juan":"./san-juan/san-juan.js","santo-entierro":"./santo-entierro/santo-entierro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
