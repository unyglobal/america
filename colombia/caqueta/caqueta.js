// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"caqueta","repository":"america","path":"colombia/caqueta","depth":2,"parent":"colombia","children":["el-doncello","florencia","puerto-rico"]});
export const childModules = Object.freeze({"el-doncello":"./el-doncello/el-doncello.js","florencia":"./florencia/florencia.js","puerto-rico":"./puerto-rico/puerto-rico.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
