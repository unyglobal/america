// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"civic-center","repository":"america","path":"united-states/california/san-francisco/civic-center","depth":4,"parent":"united-states/california/san-francisco","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
