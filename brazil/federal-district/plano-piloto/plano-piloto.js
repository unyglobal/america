// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"plano-piloto","repository":"america","path":"brazil/federal-district/plano-piloto","depth":3,"parent":"brazil/federal-district","children":["setor-bancario-norte","setor-bancario-sul","setor-comercial-norte","setor-comercial-sul","setor-cultural-norte","setor-cultural-sul","setor-de-autarquias-norte","setor-de-autarquias-sul","setor-hoteleiro-norte","setor-hoteleiro-sul"]});
export const childModules = Object.freeze({"setor-bancario-norte":"./setor-bancario-norte/setor-bancario-norte.js","setor-bancario-sul":"./setor-bancario-sul/setor-bancario-sul.js","setor-comercial-norte":"./setor-comercial-norte/setor-comercial-norte.js","setor-comercial-sul":"./setor-comercial-sul/setor-comercial-sul.js","setor-cultural-norte":"./setor-cultural-norte/setor-cultural-norte.js","setor-cultural-sul":"./setor-cultural-sul/setor-cultural-sul.js","setor-de-autarquias-norte":"./setor-de-autarquias-norte/setor-de-autarquias-norte.js","setor-de-autarquias-sul":"./setor-de-autarquias-sul/setor-de-autarquias-sul.js","setor-hoteleiro-norte":"./setor-hoteleiro-norte/setor-hoteleiro-norte.js","setor-hoteleiro-sul":"./setor-hoteleiro-sul/setor-hoteleiro-sul.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
