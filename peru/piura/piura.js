// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"piura","repository":"america","path":"peru/piura","depth":2,"parent":"peru","children":["catacaos","chulucanas","la-breita","la-union","marcavelica","paita","querecotillo","san-martin","sechura","sullana","talara","tambo-grande"]});
export const childModules = Object.freeze({"catacaos":"./catacaos/catacaos.js","chulucanas":"./chulucanas/chulucanas.js","la-breita":"./la-breita/la-breita.js","la-union":"./la-union/la-union.js","marcavelica":"./marcavelica/marcavelica.js","paita":"./paita/paita.js","querecotillo":"./querecotillo/querecotillo.js","san-martin":"./san-martin/san-martin.js","sechura":"./sechura/sechura.js","sullana":"./sullana/sullana.js","talara":"./talara/talara.js","tambo-grande":"./tambo-grande/tambo-grande.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
