// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"canas","repository":"america","path":"costa-rica/guanacaste-province/canas","depth":3,"parent":"costa-rica/guanacaste-province","children":["san-antonio","union"]});
export const childModules = Object.freeze({"san-antonio":"./san-antonio/san-antonio.js","union":"./union/union.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
