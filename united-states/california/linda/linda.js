// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"linda","repository":"america","path":"united-states/california/linda","depth":3,"parent":"united-states/california","children":["alpine-village-mobile-home-estates","thunderbird-mobile-home-park"]});
export const childModules = Object.freeze({"alpine-village-mobile-home-estates":"./alpine-village-mobile-home-estates/alpine-village-mobile-home-estates.js","thunderbird-mobile-home-park":"./thunderbird-mobile-home-park/thunderbird-mobile-home-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
