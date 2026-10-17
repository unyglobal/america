// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"parque-santiago-mobile-home-park","repository":"america","path":"united-states/california/tustin/parque-santiago-mobile-home-park","depth":4,"parent":"united-states/california/tustin","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
