// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"usulutan","repository":"america","path":"el-salvador/usulutan","depth":2,"parent":"el-salvador","children":["puerto-el-triunfo","santiago-de-maria"]});
export const childModules = Object.freeze({"puerto-el-triunfo":"./puerto-el-triunfo/puerto-el-triunfo.js","santiago-de-maria":"./santiago-de-maria/santiago-de-maria.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
