// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"newport-heights","repository":"america","path":"united-states/california/newport-beach/newport-heights","depth":4,"parent":"united-states/california/newport-beach","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
