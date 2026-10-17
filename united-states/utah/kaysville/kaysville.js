// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kaysville","repository":"america","path":"united-states/utah/kaysville","depth":3,"parent":"united-states/utah","children":["barker","clover-estates","country-estates","cresthomes-addition","crestwood-acres","fairfield-estates","happy-home-five","happy-homes","johns-acres","millcreek-estates","shanna","spencer-estates","vera-lee"]});
export const childModules = Object.freeze({"barker":"./barker/barker.js","clover-estates":"./clover-estates/clover-estates.js","country-estates":"./country-estates/country-estates.js","cresthomes-addition":"./cresthomes-addition/cresthomes-addition.js","crestwood-acres":"./crestwood-acres/crestwood-acres.js","fairfield-estates":"./fairfield-estates/fairfield-estates.js","happy-home-five":"./happy-home-five/happy-home-five.js","happy-homes":"./happy-homes/happy-homes.js","johns-acres":"./johns-acres/johns-acres.js","millcreek-estates":"./millcreek-estates/millcreek-estates.js","shanna":"./shanna/shanna.js","spencer-estates":"./spencer-estates/spencer-estates.js","vera-lee":"./vera-lee/vera-lee.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
