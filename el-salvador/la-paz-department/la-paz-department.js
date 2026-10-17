// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"la-paz-department","repository":"america","path":"el-salvador/la-paz-department","depth":2,"parent":"el-salvador","children":["zacatecoluca"]});
export const childModules = Object.freeze({"zacatecoluca":"./zacatecoluca/zacatecoluca.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
