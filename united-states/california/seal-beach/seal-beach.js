// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"seal-beach","repository":"america","path":"united-states/california/seal-beach","depth":3,"parent":"united-states/california","children":["seal-beach-trailer-park"]});
export const childModules = Object.freeze({"seal-beach-trailer-park":"./seal-beach-trailer-park/seal-beach-trailer-park.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
