// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fortin-de-las-flores","repository":"america","path":"mexico/veracruz/fortin-de-las-flores","depth":3,"parent":"mexico/veracruz","children":["jacarandas","la-terminal","las-gardenias","linda-vista","melesio-portillo","rancho-jonotal","rincon-de-linda-vista","san-pablo","zacatal"]});
export const childModules = Object.freeze({"jacarandas":"./jacarandas/jacarandas.js","la-terminal":"./la-terminal/la-terminal.js","las-gardenias":"./las-gardenias/las-gardenias.js","linda-vista":"./linda-vista/linda-vista.js","melesio-portillo":"./melesio-portillo/melesio-portillo.js","rancho-jonotal":"./rancho-jonotal/rancho-jonotal.js","rincon-de-linda-vista":"./rincon-de-linda-vista/rincon-de-linda-vista.js","san-pablo":"./san-pablo/san-pablo.js","zacatal":"./zacatal/zacatal.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
