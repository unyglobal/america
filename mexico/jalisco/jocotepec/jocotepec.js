// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jocotepec","repository":"america","path":"mexico/jalisco/jocotepec","depth":3,"parent":"mexico/jalisco","children":["anima-sola","centro","cruz-verde","el-panteon","el-zanjon","hielera","jalisco","la-campana","la-purisima","la-unidad-deportiva","los-huerta","unidad-deportiva-sur","virgen-de-guadalupe"]});
export const childModules = Object.freeze({"anima-sola":"./anima-sola/anima-sola.js","centro":"./centro/centro.js","cruz-verde":"./cruz-verde/cruz-verde.js","el-panteon":"./el-panteon/el-panteon.js","el-zanjon":"./el-zanjon/el-zanjon.js","hielera":"./hielera/hielera.js","jalisco":"./jalisco/jalisco.js","la-campana":"./la-campana/la-campana.js","la-purisima":"./la-purisima/la-purisima.js","la-unidad-deportiva":"./la-unidad-deportiva/la-unidad-deportiva.js","los-huerta":"./los-huerta/los-huerta.js","unidad-deportiva-sur":"./unidad-deportiva-sur/unidad-deportiva-sur.js","virgen-de-guadalupe":"./virgen-de-guadalupe/virgen-de-guadalupe.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
