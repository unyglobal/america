// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jose-cardel","repository":"america","path":"mexico/veracruz/jose-cardel","depth":3,"parent":"mexico/veracruz","children":["centro","ejidal","el-modelo","francisco-de-la-pena","la-antigua","lomas-verdes","los-jazmines","ninfa-coronel-esquer","primero-de-mayo","ricardo-flores-magon-primera-etapa"]});
export const childModules = Object.freeze({"centro":"./centro/centro.js","ejidal":"./ejidal/ejidal.js","el-modelo":"./el-modelo/el-modelo.js","francisco-de-la-pena":"./francisco-de-la-pena/francisco-de-la-pena.js","la-antigua":"./la-antigua/la-antigua.js","lomas-verdes":"./lomas-verdes/lomas-verdes.js","los-jazmines":"./los-jazmines/los-jazmines.js","ninfa-coronel-esquer":"./ninfa-coronel-esquer/ninfa-coronel-esquer.js","primero-de-mayo":"./primero-de-mayo/primero-de-mayo.js","ricardo-flores-magon-primera-etapa":"./ricardo-flores-magon-primera-etapa/ricardo-flores-magon-primera-etapa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
