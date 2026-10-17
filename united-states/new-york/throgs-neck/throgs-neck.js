// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"throgs-neck","repository":"america","path":"united-states/new-york/throgs-neck","depth":3,"parent":"united-states/new-york","children":["park-of-edgewater","throgs-neck-houses"]});
export const childModules = Object.freeze({"park-of-edgewater":"./park-of-edgewater/park-of-edgewater.js","throgs-neck-houses":"./throgs-neck-houses/throgs-neck-houses.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
