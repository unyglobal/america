// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"victoria-de-durango","repository":"america","path":"mexico/durango/victoria-de-durango","depth":3,"parent":"mexico/durango","children":["el-refugio"]});
export const childModules = Object.freeze({"el-refugio":"./el-refugio/el-refugio.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
