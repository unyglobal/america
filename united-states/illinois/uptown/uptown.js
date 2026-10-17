// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"uptown","repository":"america","path":"united-states/illinois/uptown","depth":3,"parent":"united-states/illinois","children":["cedar-lawn"]});
export const childModules = Object.freeze({"cedar-lawn":"./cedar-lawn/cedar-lawn.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
