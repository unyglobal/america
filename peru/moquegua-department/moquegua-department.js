// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"moquegua-department","repository":"america","path":"peru/moquegua-department","depth":2,"parent":"peru","children":["ilo","moquegua","san-antonio"]});
export const childModules = Object.freeze({"ilo":"./ilo/ilo.js","moquegua":"./moquegua/moquegua.js","san-antonio":"./san-antonio/san-antonio.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
