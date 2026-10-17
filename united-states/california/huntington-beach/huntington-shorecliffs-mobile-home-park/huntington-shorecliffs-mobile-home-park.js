// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"huntington-shorecliffs-mobile-home-park","repository":"america","path":"united-states/california/huntington-beach/huntington-shorecliffs-mobile-home-park","depth":4,"parent":"united-states/california/huntington-beach","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
