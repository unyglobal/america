// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"trujillo","repository":"america","path":"venezuela/trujillo","depth":2,"parent":"venezuela","children":["bocono","el-dividive","escuque","motatan","pampan","pampanito","sabana-de-mendoza","valera"]});
export const childModules = Object.freeze({"bocono":"./bocono/bocono.js","el-dividive":"./el-dividive/el-dividive.js","escuque":"./escuque/escuque.js","motatan":"./motatan/motatan.js","pampan":"./pampan/pampan.js","pampanito":"./pampanito/pampanito.js","sabana-de-mendoza":"./sabana-de-mendoza/sabana-de-mendoza.js","valera":"./valera/valera.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
