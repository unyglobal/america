// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"arroyo-grande","repository":"america","path":"united-states/california/arroyo-grande","depth":3,"parent":"united-states/california","children":["arroyo-trailer-park"]});
export const childModules = Object.freeze({"arroyo-trailer-park":"./arroyo-trailer-park/arroyo-trailer-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
