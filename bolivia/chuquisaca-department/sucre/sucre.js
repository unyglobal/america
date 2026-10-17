// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sucre","repository":"america","path":"bolivia/chuquisaca-department/sucre","depth":3,"parent":"bolivia/chuquisaca-department","children":["barrio-lindo","barrio-obrero","barrio-universitario","el-morro","la-rotonda","morro-municipal","noria-alta"]});
export const childModules = Object.freeze({"barrio-lindo":"./barrio-lindo/barrio-lindo.js","barrio-obrero":"./barrio-obrero/barrio-obrero.js","barrio-universitario":"./barrio-universitario/barrio-universitario.js","el-morro":"./el-morro/el-morro.js","la-rotonda":"./la-rotonda/la-rotonda.js","morro-municipal":"./morro-municipal/morro-municipal.js","noria-alta":"./noria-alta/noria-alta.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
