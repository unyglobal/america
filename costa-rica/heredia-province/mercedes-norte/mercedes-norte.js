// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mercedes-norte","repository":"america","path":"costa-rica/heredia-province/mercedes-norte","depth":3,"parent":"costa-rica/heredia-province","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
