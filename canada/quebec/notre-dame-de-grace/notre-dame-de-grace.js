// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"notre-dame-de-grace","repository":"america","path":"canada/quebec/notre-dame-de-grace","depth":3,"parent":"canada/quebec","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
