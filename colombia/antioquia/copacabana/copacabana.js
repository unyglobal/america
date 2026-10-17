// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"copacabana","repository":"america","path":"colombia/antioquia/copacabana","depth":3,"parent":"colombia/antioquia","children":["barrio-la-asuncion","barrio-las-misericordias","barrio-villa-nueva","barrio-villanueva-alta"]});
export const childModules = Object.freeze({"barrio-la-asuncion":"./barrio-la-asuncion/barrio-la-asuncion.js","barrio-las-misericordias":"./barrio-las-misericordias/barrio-las-misericordias.js","barrio-villa-nueva":"./barrio-villa-nueva/barrio-villa-nueva.js","barrio-villanueva-alta":"./barrio-villanueva-alta/barrio-villanueva-alta.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
