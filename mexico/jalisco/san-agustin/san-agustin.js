// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-agustin","repository":"america","path":"mexico/jalisco/san-agustin","depth":3,"parent":"mexico/jalisco","children":["el-terron","fraccionamiento-residencial-bonanza","hacienda-del-oro","haciendas-del-sur","la-cienega","la-fresna","los-laureles","los-olmos","san-juan-del-rio","santa-anita-camino-real"]});
export const childModules = Object.freeze({"el-terron":"./el-terron/el-terron.js","fraccionamiento-residencial-bonanza":"./fraccionamiento-residencial-bonanza/fraccionamiento-residencial-bonanza.js","hacienda-del-oro":"./hacienda-del-oro/hacienda-del-oro.js","haciendas-del-sur":"./haciendas-del-sur/haciendas-del-sur.js","la-cienega":"./la-cienega/la-cienega.js","la-fresna":"./la-fresna/la-fresna.js","los-laureles":"./los-laureles/los-laureles.js","los-olmos":"./los-olmos/los-olmos.js","san-juan-del-rio":"./san-juan-del-rio/san-juan-del-rio.js","santa-anita-camino-real":"./santa-anita-camino-real/santa-anita-camino-real.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
