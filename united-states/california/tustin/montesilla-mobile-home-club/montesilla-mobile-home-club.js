// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"montesilla-mobile-home-club","repository":"america","path":"united-states/california/tustin/montesilla-mobile-home-club","depth":4,"parent":"united-states/california/tustin","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
