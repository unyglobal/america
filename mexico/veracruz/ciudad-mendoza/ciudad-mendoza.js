// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ciudad-mendoza","repository":"america","path":"mexico/veracruz/ciudad-mendoza","depth":3,"parent":"mexico/veracruz","children":["aquiles-serdan","benito-juarez","civer","el-aguila","el-bosque","hogar","jardin","juarez","los-sauces","madero","nueva-santa-rosita","prado","santa-cruz","sidar","union-moderna"]});
export const childModules = Object.freeze({"aquiles-serdan":"./aquiles-serdan/aquiles-serdan.js","benito-juarez":"./benito-juarez/benito-juarez.js","civer":"./civer/civer.js","el-aguila":"./el-aguila/el-aguila.js","el-bosque":"./el-bosque/el-bosque.js","hogar":"./hogar/hogar.js","jardin":"./jardin/jardin.js","juarez":"./juarez/juarez.js","los-sauces":"./los-sauces/los-sauces.js","madero":"./madero/madero.js","nueva-santa-rosita":"./nueva-santa-rosita/nueva-santa-rosita.js","prado":"./prado/prado.js","santa-cruz":"./santa-cruz/santa-cruz.js","sidar":"./sidar/sidar.js","union-moderna":"./union-moderna/union-moderna.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
