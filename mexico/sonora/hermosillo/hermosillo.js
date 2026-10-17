// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hermosillo","repository":"america","path":"mexico/sonora/hermosillo","depth":3,"parent":"mexico/sonora","children":["la-huerta","san-benito","universidad-de-sonora","valle-escondido","valle-grande","valle-hermoso","valle-verde"]});
export const childModules = Object.freeze({"la-huerta":"./la-huerta/la-huerta.js","san-benito":"./san-benito/san-benito.js","universidad-de-sonora":"./universidad-de-sonora/universidad-de-sonora.js","valle-escondido":"./valle-escondido/valle-escondido.js","valle-grande":"./valle-grande/valle-grande.js","valle-hermoso":"./valle-hermoso/valle-hermoso.js","valle-verde":"./valle-verde/valle-verde.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
