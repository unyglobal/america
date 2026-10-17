// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"paramonga","repository":"america","path":"peru/lima-region/paramonga","depth":3,"parent":"peru/lima-region","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
