// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"plaza-de-la-revolucion","repository":"america","path":"cuba/havana/plaza-de-la-revolucion","depth":3,"parent":"cuba/havana","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
