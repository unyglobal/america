// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chimbote","repository":"america","path":"peru/ancash/chimbote","depth":3,"parent":"peru/ancash","children":["bolivar-bajo","el-acero","el-progreso"]});
export const childModules = Object.freeze({"bolivar-bajo":"./bolivar-bajo/bolivar-bajo.js","el-acero":"./el-acero/el-acero.js","el-progreso":"./el-progreso/el-progreso.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
