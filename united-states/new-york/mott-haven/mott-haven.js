// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mott-haven","repository":"america","path":"united-states/new-york/mott-haven","depth":3,"parent":"united-states/new-york","children":["mill-brook-houses","patterson-houses","plaza-borinquen"]});
export const childModules = Object.freeze({"mill-brook-houses":"./mill-brook-houses/mill-brook-houses.js","patterson-houses":"./patterson-houses/patterson-houses.js","plaza-borinquen":"./plaza-borinquen/plaza-borinquen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
