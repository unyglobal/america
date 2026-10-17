// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"atoyac-de-alvarez","repository":"america","path":"mexico/guerrero/atoyac-de-alvarez","depth":3,"parent":"mexico/guerrero","children":["academia-de-policia","antonio-manuel-campo","benito-juarez","centro","dorotea","el-parazal","francisco-villa","la-villita","manuel-tellez","moderna","silvestre-mariscal","sonora","vicente-guerrero"]});
export const childModules = Object.freeze({"academia-de-policia":"./academia-de-policia/academia-de-policia.js","antonio-manuel-campo":"./antonio-manuel-campo/antonio-manuel-campo.js","benito-juarez":"./benito-juarez/benito-juarez.js","centro":"./centro/centro.js","dorotea":"./dorotea/dorotea.js","el-parazal":"./el-parazal/el-parazal.js","francisco-villa":"./francisco-villa/francisco-villa.js","la-villita":"./la-villita/la-villita.js","manuel-tellez":"./manuel-tellez/manuel-tellez.js","moderna":"./moderna/moderna.js","silvestre-mariscal":"./silvestre-mariscal/silvestre-mariscal.js","sonora":"./sonora/sonora.js","vicente-guerrero":"./vicente-guerrero/vicente-guerrero.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
