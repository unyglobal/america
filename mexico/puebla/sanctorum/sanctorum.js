// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sanctorum","repository":"america","path":"mexico/puebla/sanctorum","depth":3,"parent":"mexico/puebla","children":["diamante","los-pinos"]});
export const childModules = Object.freeze({"diamante":"./diamante/diamante.js","los-pinos":"./los-pinos/los-pinos.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
