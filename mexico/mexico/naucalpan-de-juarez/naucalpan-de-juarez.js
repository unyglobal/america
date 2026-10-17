// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"naucalpan-de-juarez","repository":"america","path":"mexico/mexico/naucalpan-de-juarez","depth":3,"parent":"mexico/mexico","children":["adolfo-lopez-mateos","el-mirador","gustavo-baz","santa-cruz-acatlan"]});
export const childModules = Object.freeze({"adolfo-lopez-mateos":"./adolfo-lopez-mateos/adolfo-lopez-mateos.js","el-mirador":"./el-mirador/el-mirador.js","gustavo-baz":"./gustavo-baz/gustavo-baz.js","santa-cruz-acatlan":"./santa-cruz-acatlan/santa-cruz-acatlan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
