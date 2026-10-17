// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gold-star-mobile-home","repository":"america","path":"united-states/california/vista/gold-star-mobile-home","depth":4,"parent":"united-states/california/vista","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
