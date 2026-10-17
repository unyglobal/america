// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"el-seibo","repository":"america","path":"dominican-republic/el-seibo","depth":2,"parent":"dominican-republic","children":["santa-cruz-de-el-seibo"]});
export const childModules = Object.freeze({"santa-cruz-de-el-seibo":"./santa-cruz-de-el-seibo/santa-cruz-de-el-seibo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
