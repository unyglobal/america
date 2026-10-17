// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"empalme","repository":"america","path":"mexico/sonora/empalme","depth":3,"parent":"mexico/sonora","children":["moderna","oriente-kilometro-2","ortiz-rubio","poniente-kilometro-2"]});
export const childModules = Object.freeze({"moderna":"./moderna/moderna.js","oriente-kilometro-2":"./oriente-kilometro-2/oriente-kilometro-2.js","ortiz-rubio":"./ortiz-rubio/ortiz-rubio.js","poniente-kilometro-2":"./poniente-kilometro-2/poniente-kilometro-2.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
