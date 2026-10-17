// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"salina-cruz","repository":"america","path":"mexico/oaxaca/salina-cruz","depth":3,"parent":"mexico/oaxaca","children":["barrio-nuevo","cantarranas","cuauhtemoc","guadalupe","heroe-de-nacozari","las-brisas","las-hormigas","naval-militar","puerto-mexico","san-francisco","santa-rosa"]});
export const childModules = Object.freeze({"barrio-nuevo":"./barrio-nuevo/barrio-nuevo.js","cantarranas":"./cantarranas/cantarranas.js","cuauhtemoc":"./cuauhtemoc/cuauhtemoc.js","guadalupe":"./guadalupe/guadalupe.js","heroe-de-nacozari":"./heroe-de-nacozari/heroe-de-nacozari.js","las-brisas":"./las-brisas/las-brisas.js","las-hormigas":"./las-hormigas/las-hormigas.js","naval-militar":"./naval-militar/naval-militar.js","puerto-mexico":"./puerto-mexico/puerto-mexico.js","san-francisco":"./san-francisco/san-francisco.js","santa-rosa":"./santa-rosa/santa-rosa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
