// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"perote","repository":"america","path":"mexico/veracruz/perote","depth":3,"parent":"mexico/veracruz","children":["amado-nervo","dante-delgado","del-calvario","el-pedregal","emiliano-zapata","heroico-colegio-militar","landa","lazaro-cardenas","los-pinos","luis-echeverria-alvarez","san-rafael","teresa-morales","veracruz","viecent-guerrero","viveros"]});
export const childModules = Object.freeze({"amado-nervo":"./amado-nervo/amado-nervo.js","dante-delgado":"./dante-delgado/dante-delgado.js","del-calvario":"./del-calvario/del-calvario.js","el-pedregal":"./el-pedregal/el-pedregal.js","emiliano-zapata":"./emiliano-zapata/emiliano-zapata.js","heroico-colegio-militar":"./heroico-colegio-militar/heroico-colegio-militar.js","landa":"./landa/landa.js","lazaro-cardenas":"./lazaro-cardenas/lazaro-cardenas.js","los-pinos":"./los-pinos/los-pinos.js","luis-echeverria-alvarez":"./luis-echeverria-alvarez/luis-echeverria-alvarez.js","san-rafael":"./san-rafael/san-rafael.js","teresa-morales":"./teresa-morales/teresa-morales.js","veracruz":"./veracruz/veracruz.js","viecent-guerrero":"./viecent-guerrero/viecent-guerrero.js","viveros":"./viveros/viveros.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
