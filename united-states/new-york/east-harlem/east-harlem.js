// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"east-harlem","repository":"america","path":"united-states/new-york/east-harlem","depth":3,"parent":"united-states/new-york","children":["franklin-houses"]});
export const childModules = Object.freeze({"franklin-houses":"./franklin-houses/franklin-houses.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
