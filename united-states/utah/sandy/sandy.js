// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sandy","repository":"america","path":"united-states/utah/sandy","depth":3,"parent":"united-states/utah","children":["brentmar-circle","flagstaff-addition","greenwood-park","laurel-estates","mount-jordan-meadows"]});
export const childModules = Object.freeze({"brentmar-circle":"./brentmar-circle/brentmar-circle.js","flagstaff-addition":"./flagstaff-addition/flagstaff-addition.js","greenwood-park":"./greenwood-park/greenwood-park.js","laurel-estates":"./laurel-estates/laurel-estates.js","mount-jordan-meadows":"./mount-jordan-meadows/mount-jordan-meadows.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
