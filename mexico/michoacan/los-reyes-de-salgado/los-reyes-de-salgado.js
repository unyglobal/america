// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"los-reyes-de-salgado","repository":"america","path":"mexico/michoacan/los-reyes-de-salgado","depth":3,"parent":"mexico/michoacan","children":["el-chorrito","emiliano-zapata","guadalupana","heroe-de-nacozari","independencia","jardin","libras","san-jose"]});
export const childModules = Object.freeze({"el-chorrito":"./el-chorrito/el-chorrito.js","emiliano-zapata":"./emiliano-zapata/emiliano-zapata.js","guadalupana":"./guadalupana/guadalupana.js","heroe-de-nacozari":"./heroe-de-nacozari/heroe-de-nacozari.js","independencia":"./independencia/independencia.js","jardin":"./jardin/jardin.js","libras":"./libras/libras.js","san-jose":"./san-jose/san-jose.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
