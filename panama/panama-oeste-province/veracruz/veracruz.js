// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"veracruz","repository":"america","path":"panama/panama-oeste-province/veracruz","depth":3,"parent":"panama/panama-oeste-province","children":["altos-de-la-roca","barriada-esperanza-numero-dos","barriada-los-pinos","barriada-panama","costa-del-sol","el-ralengo","la-represa"]});
export const childModules = Object.freeze({"altos-de-la-roca":"./altos-de-la-roca/altos-de-la-roca.js","barriada-esperanza-numero-dos":"./barriada-esperanza-numero-dos/barriada-esperanza-numero-dos.js","barriada-los-pinos":"./barriada-los-pinos/barriada-los-pinos.js","barriada-panama":"./barriada-panama/barriada-panama.js","costa-del-sol":"./costa-del-sol/costa-del-sol.js","el-ralengo":"./el-ralengo/el-ralengo.js","la-represa":"./la-represa/la-represa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
