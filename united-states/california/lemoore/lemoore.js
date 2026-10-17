// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lemoore","repository":"america","path":"united-states/california/lemoore","depth":3,"parent":"united-states/california","children":["magnolia-gardens-mobile-home-park"]});
export const childModules = Object.freeze({"magnolia-gardens-mobile-home-park":"./magnolia-gardens-mobile-home-park/magnolia-gardens-mobile-home-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
