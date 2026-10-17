// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-jose-del-castillo","repository":"america","path":"mexico/jalisco/san-jose-del-castillo","depth":3,"parent":"mexico/jalisco","children":["campo-bello","jardines-del-castillo-tercera-seccion","parque-industrial-el-salto","villas-de-guadalupe"]});
export const childModules = Object.freeze({"campo-bello":"./campo-bello/campo-bello.js","jardines-del-castillo-tercera-seccion":"./jardines-del-castillo-tercera-seccion/jardines-del-castillo-tercera-seccion.js","parque-industrial-el-salto":"./parque-industrial-el-salto/parque-industrial-el-salto.js","villas-de-guadalupe":"./villas-de-guadalupe/villas-de-guadalupe.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
