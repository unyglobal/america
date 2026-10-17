// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sucre","repository":"america","path":"venezuela/sucre","depth":2,"parent":"venezuela","children":["araya","cariaco","carupano","casanay","cumana","cumanacoa","guiria"]});
export const childModules = Object.freeze({"araya":"./araya/araya.js","cariaco":"./cariaco/cariaco.js","carupano":"./carupano/carupano.js","casanay":"./casanay/casanay.js","cumana":"./cumana/cumana.js","cumanacoa":"./cumanacoa/cumanacoa.js","guiria":"./guiria/guiria.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
