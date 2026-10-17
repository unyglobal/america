// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ewell","repository":"america","path":"united-states/utah/millcreek/ewell","depth":4,"parent":"united-states/utah/millcreek","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
