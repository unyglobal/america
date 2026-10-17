// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"murrieta","repository":"america","path":"united-states/california/murrieta","depth":3,"parent":"united-states/california","children":["mission-hills-mobile-home-park"]});
export const childModules = Object.freeze({"mission-hills-mobile-home-park":"./mission-hills-mobile-home-park/mission-hills-mobile-home-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
