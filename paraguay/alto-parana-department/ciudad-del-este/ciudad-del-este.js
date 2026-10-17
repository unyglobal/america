// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ciudad-del-este","repository":"america","path":"paraguay/alto-parana-department/ciudad-del-este","depth":3,"parent":"paraguay/alto-parana-department","children":["san-isidro"]});
export const childModules = Object.freeze({"san-isidro":"./san-isidro/san-isidro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
