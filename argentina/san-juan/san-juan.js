// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-juan","repository":"america","path":"argentina/san-juan","depth":2,"parent":"argentina","children":["albardon","caucete","chimbas","pocito","santa-lucia","villa-general-san-martin","villa-paula-de-sarmiento"]});
export const childModules = Object.freeze({"albardon":"./albardon/albardon.js","caucete":"./caucete/caucete.js","chimbas":"./chimbas/chimbas.js","pocito":"./pocito/pocito.js","santa-lucia":"./santa-lucia/santa-lucia.js","villa-general-san-martin":"./villa-general-san-martin/villa-general-san-martin.js","villa-paula-de-sarmiento":"./villa-paula-de-sarmiento/villa-paula-de-sarmiento.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
