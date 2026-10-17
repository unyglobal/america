// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"periban-de-ramos","repository":"america","path":"mexico/michoacan/periban-de-ramos","depth":3,"parent":"mexico/michoacan","children":["el-chirimoyo","la-joyita","vistas-del-valle"]});
export const childModules = Object.freeze({"el-chirimoyo":"./el-chirimoyo/el-chirimoyo.js","la-joyita":"./la-joyita/la-joyita.js","vistas-del-valle":"./vistas-del-valle/vistas-del-valle.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
