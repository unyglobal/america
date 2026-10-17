// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"guamuchil","repository":"america","path":"mexico/sinaloa/guamuchil","depth":3,"parent":"mexico/sinaloa","children":["colonia-del-evora","juarez","los-parques","militar","morelos","zona-centro"]});
export const childModules = Object.freeze({"colonia-del-evora":"./colonia-del-evora/colonia-del-evora.js","juarez":"./juarez/juarez.js","los-parques":"./los-parques/los-parques.js","militar":"./militar/militar.js","morelos":"./morelos/morelos.js","zona-centro":"./zona-centro/zona-centro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
