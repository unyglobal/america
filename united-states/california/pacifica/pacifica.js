// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pacifica","repository":"america","path":"united-states/california/pacifica","depth":3,"parent":"united-states/california","children":["fairway-park","rockaway-beach","vallemar"]});
export const childModules = Object.freeze({"fairway-park":"./fairway-park/fairway-park.js","rockaway-beach":"./rockaway-beach/rockaway-beach.js","vallemar":"./vallemar/vallemar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
