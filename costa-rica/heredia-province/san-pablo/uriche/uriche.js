// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"uriche","repository":"america","path":"costa-rica/heredia-province/san-pablo/uriche","depth":4,"parent":"costa-rica/heredia-province/san-pablo","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
