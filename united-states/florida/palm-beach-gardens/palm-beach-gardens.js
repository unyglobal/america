// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"palm-beach-gardens","repository":"america","path":"united-states/florida/palm-beach-gardens","depth":3,"parent":"united-states/florida","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
