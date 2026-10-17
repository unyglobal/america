// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ixtaczoquitlan","repository":"america","path":"mexico/veracruz/ixtaczoquitlan","depth":3,"parent":"mexico/veracruz","children":["aquileo-herrera","el-calvario","el-mirador","el-santisimo","el-trebol","instituto-del-fondo-nacional-de-la-vivienda-para-los-trabajadores-ixtaczoquitlan","la-luz","san-jose"]});
export const childModules = Object.freeze({"aquileo-herrera":"./aquileo-herrera/aquileo-herrera.js","el-calvario":"./el-calvario/el-calvario.js","el-mirador":"./el-mirador/el-mirador.js","el-santisimo":"./el-santisimo/el-santisimo.js","el-trebol":"./el-trebol/el-trebol.js","instituto-del-fondo-nacional-de-la-vivienda-para-los-trabajadores-ixtaczoquitlan":"./instituto-del-fondo-nacional-de-la-vivienda-para-los-trabajadores-ixtaczoquitlan/instituto-del-fondo-nacional-de-la-vivienda-para-los-trabajadores-ixtaczoquitlan.js","la-luz":"./la-luz/la-luz.js","san-jose":"./san-jose/san-jose.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
