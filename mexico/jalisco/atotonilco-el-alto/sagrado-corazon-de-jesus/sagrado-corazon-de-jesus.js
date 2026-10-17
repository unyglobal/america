// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sagrado-corazon-de-jesus","repository":"america","path":"mexico/jalisco/atotonilco-el-alto/sagrado-corazon-de-jesus","depth":4,"parent":"mexico/jalisco/atotonilco-el-alto","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
