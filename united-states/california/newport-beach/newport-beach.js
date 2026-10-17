// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"newport-beach","repository":"america","path":"united-states/california/newport-beach","depth":3,"parent":"united-states/california","children":["cannery-village-mobile-home-park","newport-heights"]});
export const childModules = Object.freeze({"cannery-village-mobile-home-park":"./cannery-village-mobile-home-park/cannery-village-mobile-home-park.js","newport-heights":"./newport-heights/newport-heights.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
