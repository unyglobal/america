// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"carmen","repository":"america","path":"costa-rica/guanacaste-province/nicoya/carmen","depth":4,"parent":"costa-rica/guanacaste-province/nicoya","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
