// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pinar-del-rio","repository":"america","path":"cuba/pinar-del-rio","depth":2,"parent":"cuba","children":["consolacion-del-sur","guane","los-palacios","minas-de-matahambre","vinales"]});
export const childModules = Object.freeze({"consolacion-del-sur":"./consolacion-del-sur/consolacion-del-sur.js","guane":"./guane/guane.js","los-palacios":"./los-palacios/los-palacios.js","minas-de-matahambre":"./minas-de-matahambre/minas-de-matahambre.js","vinales":"./vinales/vinales.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
