// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zinapecuaro-de-figueroa","repository":"america","path":"mexico/michoacan/zinapecuaro-de-figueroa","depth":3,"parent":"mexico/michoacan","children":["bellavista","doce-de-diciembre","el-desierto","independencia","la-mora","las-clavellinas","lazaro-cardenas","los-parajes","los-pinos","los-pocitos","vasco-de-quiroga","veinte-de-noviembre"]});
export const childModules = Object.freeze({"bellavista":"./bellavista/bellavista.js","doce-de-diciembre":"./doce-de-diciembre/doce-de-diciembre.js","el-desierto":"./el-desierto/el-desierto.js","independencia":"./independencia/independencia.js","la-mora":"./la-mora/la-mora.js","las-clavellinas":"./las-clavellinas/las-clavellinas.js","lazaro-cardenas":"./lazaro-cardenas/lazaro-cardenas.js","los-parajes":"./los-parajes/los-parajes.js","los-pinos":"./los-pinos/los-pinos.js","los-pocitos":"./los-pocitos/los-pocitos.js","vasco-de-quiroga":"./vasco-de-quiroga/vasco-de-quiroga.js","veinte-de-noviembre":"./veinte-de-noviembre/veinte-de-noviembre.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
