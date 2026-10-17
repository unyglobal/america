// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-francisco-tesistan","repository":"america","path":"mexico/jalisco/san-francisco-tesistan","depth":3,"parent":"mexico/jalisco","children":["estrada","hacienda-juarez","haciendas-de-zapopan","las-aguilas","martell-del-valle","santa-clara-ii"]});
export const childModules = Object.freeze({"estrada":"./estrada/estrada.js","hacienda-juarez":"./hacienda-juarez/hacienda-juarez.js","haciendas-de-zapopan":"./haciendas-de-zapopan/haciendas-de-zapopan.js","las-aguilas":"./las-aguilas/las-aguilas.js","martell-del-valle":"./martell-del-valle/martell-del-valle.js","santa-clara-ii":"./santa-clara-ii/santa-clara-ii.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
