// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"laurel-chase-acres","repository":"america","path":"united-states/utah/riverton/laurel-chase-acres","depth":4,"parent":"united-states/utah/riverton","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
