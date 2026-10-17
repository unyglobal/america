// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"acatzingo","repository":"america","path":"mexico/puebla/acatzingo","depth":3,"parent":"mexico/puebla","children":["el-calvario","jesus-de-alonso","jesus-de-las-maravillas","las-tres-horas","san-antonio","san-gabriel","san-jose"]});
export const childModules = Object.freeze({"el-calvario":"./el-calvario/el-calvario.js","jesus-de-alonso":"./jesus-de-alonso/jesus-de-alonso.js","jesus-de-las-maravillas":"./jesus-de-las-maravillas/jesus-de-las-maravillas.js","las-tres-horas":"./las-tres-horas/las-tres-horas.js","san-antonio":"./san-antonio/san-antonio.js","san-gabriel":"./san-gabriel/san-gabriel.js","san-jose":"./san-jose/san-jose.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
