// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nicoya","repository":"america","path":"costa-rica/guanacaste-province/nicoya","depth":3,"parent":"costa-rica/guanacaste-province","children":["carmen"]});
export const childModules = Object.freeze({"carmen":"./carmen/carmen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
