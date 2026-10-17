// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cabanas","repository":"america","path":"el-salvador/cabanas","depth":2,"parent":"el-salvador","children":["sensuntepeque"]});
export const childModules = Object.freeze({"sensuntepeque":"./sensuntepeque/sensuntepeque.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
