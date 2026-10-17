// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lima","repository":"america","path":"peru/lima-province/lima","depth":3,"parent":"peru/lima-province","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
