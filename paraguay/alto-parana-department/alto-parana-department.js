// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"alto-parana-department","repository":"america","path":"paraguay/alto-parana-department","depth":2,"parent":"paraguay","children":["ciudad-del-este","presidente-franco"]});
export const childModules = Object.freeze({"ciudad-del-este":"./ciudad-del-este/ciudad-del-este.js","presidente-franco":"./presidente-franco/presidente-franco.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
