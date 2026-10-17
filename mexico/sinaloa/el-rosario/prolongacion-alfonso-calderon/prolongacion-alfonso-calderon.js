// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"prolongacion-alfonso-calderon","repository":"america","path":"mexico/sinaloa/el-rosario/prolongacion-alfonso-calderon","depth":4,"parent":"mexico/sinaloa/el-rosario","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
