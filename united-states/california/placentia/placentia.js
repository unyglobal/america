// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"placentia","repository":"america","path":"united-states/california/placentia","depth":3,"parent":"united-states/california","children":["hacienda-mobile-home-park"]});
export const childModules = Object.freeze({"hacienda-mobile-home-park":"./hacienda-mobile-home-park/hacienda-mobile-home-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
