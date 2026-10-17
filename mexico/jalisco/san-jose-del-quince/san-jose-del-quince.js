// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-jose-del-quince","repository":"america","path":"mexico/jalisco/san-jose-del-quince","depth":3,"parent":"mexico/jalisco","children":["diamante","la-higuera","prados-de-el-salto"]});
export const childModules = Object.freeze({"diamante":"./diamante/diamante.js","la-higuera":"./la-higuera/la-higuera.js","prados-de-el-salto":"./prados-de-el-salto/prados-de-el-salto.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
