// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zacapu","repository":"america","path":"mexico/michoacan/zacapu","depth":3,"parent":"mexico/michoacan","children":["garcia-padilla","la-zarcita","loma-jardin","lomas-jardin","los-aguacates","miguel-angel","miguel-hidalgo","moderna","pineda","san-francisco","valle-verde"]});
export const childModules = Object.freeze({"garcia-padilla":"./garcia-padilla/garcia-padilla.js","la-zarcita":"./la-zarcita/la-zarcita.js","loma-jardin":"./loma-jardin/loma-jardin.js","lomas-jardin":"./lomas-jardin/lomas-jardin.js","los-aguacates":"./los-aguacates/los-aguacates.js","miguel-angel":"./miguel-angel/miguel-angel.js","miguel-hidalgo":"./miguel-hidalgo/miguel-hidalgo.js","moderna":"./moderna/moderna.js","pineda":"./pineda/pineda.js","san-francisco":"./san-francisco/san-francisco.js","valle-verde":"./valle-verde/valle-verde.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
