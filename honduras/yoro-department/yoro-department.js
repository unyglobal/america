// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yoro-department","repository":"america","path":"honduras/yoro-department","depth":2,"parent":"honduras","children":["el-negrito","el-progreso","olanchito","santa-rita","sulaco","victoria","yorito","yoro"]});
export const childModules = Object.freeze({"el-negrito":"./el-negrito/el-negrito.js","el-progreso":"./el-progreso/el-progreso.js","olanchito":"./olanchito/olanchito.js","santa-rita":"./santa-rita/santa-rita.js","sulaco":"./sulaco/sulaco.js","victoria":"./victoria/victoria.js","yorito":"./yorito/yorito.js","yoro":"./yoro/yoro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
