// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"guanacaste-province","repository":"america","path":"costa-rica/guanacaste-province","depth":2,"parent":"costa-rica","children":["canas","liberia","nicoya"]});
export const childModules = Object.freeze({"canas":"./canas/canas.js","liberia":"./liberia/liberia.js","nicoya":"./nicoya/nicoya.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
