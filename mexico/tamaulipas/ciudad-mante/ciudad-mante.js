// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ciudad-mante","repository":"america","path":"mexico/tamaulipas/ciudad-mante","depth":3,"parent":"mexico/tamaulipas","children":["anahuac-numero-uno","benito-juarez","ferrocarril","nunez","quintanilla","reforma","zona-centro"]});
export const childModules = Object.freeze({"anahuac-numero-uno":"./anahuac-numero-uno/anahuac-numero-uno.js","benito-juarez":"./benito-juarez/benito-juarez.js","ferrocarril":"./ferrocarril/ferrocarril.js","nunez":"./nunez/nunez.js","quintanilla":"./quintanilla/quintanilla.js","reforma":"./reforma/reforma.js","zona-centro":"./zona-centro/zona-centro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
