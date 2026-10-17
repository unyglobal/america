// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ciudad-nezahualcoyotl","repository":"america","path":"mexico/mexico/ciudad-nezahualcoyotl","depth":3,"parent":"mexico/mexico","children":["evolucion"]});
export const childModules = Object.freeze({"evolucion":"./evolucion/evolucion.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
