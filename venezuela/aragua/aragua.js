// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"aragua","repository":"america","path":"venezuela/aragua","depth":2,"parent":"venezuela","children":["cagua","el-limon","la-victoria","las-tejerias","maracay","palo-negro","san-mateo","turmero","villa-de-cura"]});
export const childModules = Object.freeze({"cagua":"./cagua/cagua.js","el-limon":"./el-limon/el-limon.js","la-victoria":"./la-victoria/la-victoria.js","las-tejerias":"./las-tejerias/las-tejerias.js","maracay":"./maracay/maracay.js","palo-negro":"./palo-negro/palo-negro.js","san-mateo":"./san-mateo/san-mateo.js","turmero":"./turmero/turmero.js","villa-de-cura":"./villa-de-cura/villa-de-cura.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
