// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"maryvale","repository":"america","path":"united-states/arizona/maryvale","depth":3,"parent":"united-states/arizona","children":["long-haven-west-mobile-home-park","longhaven-west"]});
export const childModules = Object.freeze({"long-haven-west-mobile-home-park":"./long-haven-west-mobile-home-park/long-haven-west-mobile-home-park.js","longhaven-west":"./longhaven-west/longhaven-west.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
