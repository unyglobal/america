// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"makakilo-makaiwa-hills-kunia","repository":"america","path":"united-states/hawaii/makakilo-makaiwa-hills-kunia","depth":3,"parent":"united-states/hawaii","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
