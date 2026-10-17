// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"manabi","repository":"america","path":"ecuador/manabi","depth":2,"parent":"ecuador","children":["bahia-de-caraquez","calceta","chone","jipijapa","manta","montecristi","portoviejo","sucre"]});
export const childModules = Object.freeze({"bahia-de-caraquez":"./bahia-de-caraquez/bahia-de-caraquez.js","calceta":"./calceta/calceta.js","chone":"./chone/chone.js","jipijapa":"./jipijapa/jipijapa.js","manta":"./manta/manta.js","montecristi":"./montecristi/montecristi.js","portoviejo":"./portoviejo/portoviejo.js","sucre":"./sucre/sucre.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
