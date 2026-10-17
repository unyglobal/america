// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"arvin","repository":"america","path":"united-states/california/arvin","depth":3,"parent":"united-states/california","children":["arvin-mobile-home-estates"]});
export const childModules = Object.freeze({"arvin-mobile-home-estates":"./arvin-mobile-home-estates/arvin-mobile-home-estates.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
