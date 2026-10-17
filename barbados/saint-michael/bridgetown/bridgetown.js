// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bridgetown","repository":"america","path":"barbados/saint-michael/bridgetown","depth":3,"parent":"barbados/saint-michael","children":["cat-s-castle","cheapside","deacons","fontabelle","new-orleans","whitepark"]});
export const childModules = Object.freeze({"cat-s-castle":"./cat-s-castle/cat-s-castle.js","cheapside":"./cheapside/cheapside.js","deacons":"./deacons/deacons.js","fontabelle":"./fontabelle/fontabelle.js","new-orleans":"./new-orleans/new-orleans.js","whitepark":"./whitepark/whitepark.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
