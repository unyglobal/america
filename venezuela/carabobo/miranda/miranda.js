// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"miranda","repository":"america","path":"venezuela/carabobo/miranda","depth":3,"parent":"venezuela/carabobo","children":["baruta","carrizal","caucagua","caucaguito","chacao","charallave","cua","el-cafetal","el-hatillo","guarenas","guatire","higuerote","la-dolorita","lander","los-dos-caminos","los-teques","mamporal"]});
export const childModules = Object.freeze({"baruta":"./baruta/baruta.js","carrizal":"./carrizal/carrizal.js","caucagua":"./caucagua/caucagua.js","caucaguito":"./caucaguito/caucaguito.js","chacao":"./chacao/chacao.js","charallave":"./charallave/charallave.js","cua":"./cua/cua.js","el-cafetal":"./el-cafetal/el-cafetal.js","el-hatillo":"./el-hatillo/el-hatillo.js","guarenas":"./guarenas/guarenas.js","guatire":"./guatire/guatire.js","higuerote":"./higuerote/higuerote.js","la-dolorita":"./la-dolorita/la-dolorita.js","lander":"./lander/lander.js","los-dos-caminos":"./los-dos-caminos/los-dos-caminos.js","los-teques":"./los-teques/los-teques.js","mamporal":"./mamporal/mamporal.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
