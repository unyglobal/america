// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"huntington-beach","repository":"america","path":"united-states/california/huntington-beach","depth":3,"parent":"united-states/california","children":["huntington-shorecliffs-mobile-home-park","pacific-trailer-park"]});
export const childModules = Object.freeze({"huntington-shorecliffs-mobile-home-park":"./huntington-shorecliffs-mobile-home-park/huntington-shorecliffs-mobile-home-park.js","pacific-trailer-park":"./pacific-trailer-park/pacific-trailer-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
