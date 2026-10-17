// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"retalhuleu","repository":"america","path":"guatemala/retalhuleu","depth":2,"parent":"guatemala","children":["el-asintal","nuevo-san-carlos","san-felipe","san-sebastian"]});
export const childModules = Object.freeze({"el-asintal":"./el-asintal/el-asintal.js","nuevo-san-carlos":"./nuevo-san-carlos/nuevo-san-carlos.js","san-felipe":"./san-felipe/san-felipe.js","san-sebastian":"./san-sebastian/san-sebastian.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
