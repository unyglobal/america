// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-salvador-department","repository":"america","path":"el-salvador/san-salvador-department","depth":2,"parent":"el-salvador","children":["aguilares","apopa","ayutuxtepeque","cuscatancingo","delgado","ilopango","mejicanos","san-marcos","san-salvador","soyapango"]});
export const childModules = Object.freeze({"aguilares":"./aguilares/aguilares.js","apopa":"./apopa/apopa.js","ayutuxtepeque":"./ayutuxtepeque/ayutuxtepeque.js","cuscatancingo":"./cuscatancingo/cuscatancingo.js","delgado":"./delgado/delgado.js","ilopango":"./ilopango/ilopango.js","mejicanos":"./mejicanos/mejicanos.js","san-marcos":"./san-marcos/san-marcos.js","san-salvador":"./san-salvador/san-salvador.js","soyapango":"./soyapango/soyapango.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
