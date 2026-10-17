// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vestavia-hills","repository":"america","path":"united-states/alabama/vestavia-hills","depth":3,"parent":"united-states/alabama","children":["beacon-hills","biltmore-estates","montclair","vestavia-lake"]});
export const childModules = Object.freeze({"beacon-hills":"./beacon-hills/beacon-hills.js","biltmore-estates":"./biltmore-estates/biltmore-estates.js","montclair":"./montclair/montclair.js","vestavia-lake":"./vestavia-lake/vestavia-lake.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
