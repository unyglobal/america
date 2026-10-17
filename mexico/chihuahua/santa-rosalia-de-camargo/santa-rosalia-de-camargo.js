// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"santa-rosalia-de-camargo","repository":"america","path":"mexico/chihuahua/santa-rosalia-de-camargo","depth":3,"parent":"mexico/chihuahua","children":["alsacia-lorena","arbol-grande","lagunita","los-nogales","obrera","san-isidro","villa-diamante"]});
export const childModules = Object.freeze({"alsacia-lorena":"./alsacia-lorena/alsacia-lorena.js","arbol-grande":"./arbol-grande/arbol-grande.js","lagunita":"./lagunita/lagunita.js","los-nogales":"./los-nogales/los-nogales.js","obrera":"./obrera/obrera.js","san-isidro":"./san-isidro/san-isidro.js","villa-diamante":"./villa-diamante/villa-diamante.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
