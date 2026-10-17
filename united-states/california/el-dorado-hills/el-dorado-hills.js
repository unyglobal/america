// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"el-dorado-hills","repository":"america","path":"united-states/california/el-dorado-hills","depth":3,"parent":"united-states/california","children":["governors-village","oak-ridge-village","stonegate-village"]});
export const childModules = Object.freeze({"governors-village":"./governors-village/governors-village.js","oak-ridge-village":"./oak-ridge-village/oak-ridge-village.js","stonegate-village":"./stonegate-village/stonegate-village.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
