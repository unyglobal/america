// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mission-hills-mobile-home-park","repository":"america","path":"united-states/california/murrieta/mission-hills-mobile-home-park","depth":4,"parent":"united-states/california/murrieta","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
