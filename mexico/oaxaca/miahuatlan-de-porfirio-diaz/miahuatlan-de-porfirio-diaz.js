// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"miahuatlan-de-porfirio-diaz","repository":"america","path":"mexico/oaxaca/miahuatlan-de-porfirio-diaz","depth":3,"parent":"mexico/oaxaca","children":["abajo","barrio-del-gueche","centro","chico","coronel-feliciano-garcia","emiliano-zapata","san-isidro"]});
export const childModules = Object.freeze({"abajo":"./abajo/abajo.js","barrio-del-gueche":"./barrio-del-gueche/barrio-del-gueche.js","centro":"./centro/centro.js","chico":"./chico/chico.js","coronel-feliciano-garcia":"./coronel-feliciano-garcia/coronel-feliciano-garcia.js","emiliano-zapata":"./emiliano-zapata/emiliano-zapata.js","san-isidro":"./san-isidro/san-isidro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
