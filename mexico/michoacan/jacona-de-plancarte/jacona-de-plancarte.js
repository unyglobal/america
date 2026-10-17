// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jacona-de-plancarte","repository":"america","path":"mexico/michoacan/jacona-de-plancarte","depth":3,"parent":"mexico/michoacan","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
