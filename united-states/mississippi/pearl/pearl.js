// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pearl","repository":"america","path":"united-states/mississippi/pearl","depth":3,"parent":"united-states/mississippi","children":["bates-park","melvin-heights","patton-place","pine-park","randall-place"]});
export const childModules = Object.freeze({"bates-park":"./bates-park/bates-park.js","melvin-heights":"./melvin-heights/melvin-heights.js","patton-place":"./patton-place/patton-place.js","pine-park":"./pine-park/pine-park.js","randall-place":"./randall-place/randall-place.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
