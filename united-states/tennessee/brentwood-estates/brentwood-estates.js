// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"brentwood-estates","repository":"america","path":"united-states/tennessee/brentwood-estates","depth":3,"parent":"united-states/tennessee","children":["brentwood-park","smyrna-road-homes"]});
export const childModules = Object.freeze({"brentwood-park":"./brentwood-park/brentwood-park.js","smyrna-road-homes":"./smyrna-road-homes/smyrna-road-homes.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
