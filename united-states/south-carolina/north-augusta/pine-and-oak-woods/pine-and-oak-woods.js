// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pine-and-oak-woods","repository":"america","path":"united-states/south-carolina/north-augusta/pine-and-oak-woods","depth":4,"parent":"united-states/south-carolina/north-augusta","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
