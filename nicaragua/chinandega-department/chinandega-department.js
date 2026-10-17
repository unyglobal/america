// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chinandega-department","repository":"america","path":"nicaragua/chinandega-department","depth":2,"parent":"nicaragua","children":["chichigalpa","chinandega","corinto","el-viejo","somotillo"]});
export const childModules = Object.freeze({"chichigalpa":"./chichigalpa/chichigalpa.js","chinandega":"./chinandega/chinandega.js","corinto":"./corinto/corinto.js","el-viejo":"./el-viejo/el-viejo.js","somotillo":"./somotillo/somotillo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
