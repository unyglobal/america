// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ciudad-benito-juarez","repository":"america","path":"mexico/nuevo-leon/ciudad-benito-juarez","depth":3,"parent":"mexico/nuevo-leon","children":["centro-de-benito-juarez","el-ancon","hacienda-san-jose","haciendas-de-juarez","infonavit-benito-juarez","joaquin-garza-y-garza","mirador","riveras-de-santa-maria"]});
export const childModules = Object.freeze({"centro-de-benito-juarez":"./centro-de-benito-juarez/centro-de-benito-juarez.js","el-ancon":"./el-ancon/el-ancon.js","hacienda-san-jose":"./hacienda-san-jose/hacienda-san-jose.js","haciendas-de-juarez":"./haciendas-de-juarez/haciendas-de-juarez.js","infonavit-benito-juarez":"./infonavit-benito-juarez/infonavit-benito-juarez.js","joaquin-garza-y-garza":"./joaquin-garza-y-garza/joaquin-garza-y-garza.js","mirador":"./mirador/mirador.js","riveras-de-santa-maria":"./riveras-de-santa-maria/riveras-de-santa-maria.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
