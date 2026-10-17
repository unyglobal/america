// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"marfil","repository":"america","path":"mexico/guanajuato/marfil","depth":3,"parent":"mexico/guanajuato","children":["colonia-de-las-palomas","colonia-marfil-alto","las-bateas","las-biznagas","lindavista","lomas-de-marfil-ii","los-magueyes","marfil-dorado","mineral-de-marfil"]});
export const childModules = Object.freeze({"colonia-de-las-palomas":"./colonia-de-las-palomas/colonia-de-las-palomas.js","colonia-marfil-alto":"./colonia-marfil-alto/colonia-marfil-alto.js","las-bateas":"./las-bateas/las-bateas.js","las-biznagas":"./las-biznagas/las-biznagas.js","lindavista":"./lindavista/lindavista.js","lomas-de-marfil-ii":"./lomas-de-marfil-ii/lomas-de-marfil-ii.js","los-magueyes":"./los-magueyes/los-magueyes.js","marfil-dorado":"./marfil-dorado/marfil-dorado.js","mineral-de-marfil":"./mineral-de-marfil/mineral-de-marfil.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
