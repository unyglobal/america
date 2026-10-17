// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"azcapotzalco","repository":"america","path":"mexico/mexico-city/azcapotzalco","depth":3,"parent":"mexico/mexico-city","children":["la-preciosa","los-reyes","reynosa-tamaulipas","san-andres","san-mateo","san-rafael"]});
export const childModules = Object.freeze({"la-preciosa":"./la-preciosa/la-preciosa.js","los-reyes":"./los-reyes/los-reyes.js","reynosa-tamaulipas":"./reynosa-tamaulipas/reynosa-tamaulipas.js","san-andres":"./san-andres/san-andres.js","san-mateo":"./san-mateo/san-mateo.js","san-rafael":"./san-rafael/san-rafael.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
