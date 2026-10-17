// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kenwood","repository":"america","path":"united-states/illinois/kenwood","depth":3,"parent":"united-states/illinois","children":["kennicott-place"]});
export const childModules = Object.freeze({"kennicott-place":"./kennicott-place/kennicott-place.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
