// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zumpango-del-rio","repository":"america","path":"mexico/guerrero/zumpango-del-rio","depth":3,"parent":"mexico/guerrero","children":["campestre","colonia-del-pri","del-pri"]});
export const childModules = Object.freeze({"campestre":"./campestre/campestre.js","colonia-del-pri":"./colonia-del-pri/colonia-del-pri.js","del-pri":"./del-pri/del-pri.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
