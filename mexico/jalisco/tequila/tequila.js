// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tequila","repository":"america","path":"mexico/jalisco/tequila","depth":3,"parent":"mexico/jalisco","children":["centro","colinas-del-rosario","el-ranchito","el-rastro","instituto-del-fondo-nacional-de-la-vivienda-para-los-trabajadores","la-mezcalera","la-muralla","la-villa","lopez-mateos","mayahuel","miguel-de-la-madrid","obrera-dos","obrera-uno"]});
export const childModules = Object.freeze({"centro":"./centro/centro.js","colinas-del-rosario":"./colinas-del-rosario/colinas-del-rosario.js","el-ranchito":"./el-ranchito/el-ranchito.js","el-rastro":"./el-rastro/el-rastro.js","instituto-del-fondo-nacional-de-la-vivienda-para-los-trabajadores":"./instituto-del-fondo-nacional-de-la-vivienda-para-los-trabajadores/instituto-del-fondo-nacional-de-la-vivienda-para-los-trabajadores.js","la-mezcalera":"./la-mezcalera/la-mezcalera.js","la-muralla":"./la-muralla/la-muralla.js","la-villa":"./la-villa/la-villa.js","lopez-mateos":"./lopez-mateos/lopez-mateos.js","mayahuel":"./mayahuel/mayahuel.js","miguel-de-la-madrid":"./miguel-de-la-madrid/miguel-de-la-madrid.js","obrera-dos":"./obrera-dos/obrera-dos.js","obrera-uno":"./obrera-uno/obrera-uno.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
