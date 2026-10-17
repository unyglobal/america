// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"managua-department","repository":"america","path":"nicaragua/managua-department","depth":2,"parent":"nicaragua","children":["ciudad-sandino","el-crucero","managua","mateare","san-rafael-del-sur","tipitapa"]});
export const childModules = Object.freeze({"ciudad-sandino":"./ciudad-sandino/ciudad-sandino.js","el-crucero":"./el-crucero/el-crucero.js","managua":"./managua/managua.js","mateare":"./mateare/mateare.js","san-rafael-del-sur":"./san-rafael-del-sur/san-rafael-del-sur.js","tipitapa":"./tipitapa/tipitapa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
