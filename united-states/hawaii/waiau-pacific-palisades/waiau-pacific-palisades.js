// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"waiau-pacific-palisades","repository":"america","path":"united-states/hawaii/waiau-pacific-palisades","depth":3,"parent":"united-states/hawaii","children":["lower-pearl-city"]});
export const childModules = Object.freeze({"lower-pearl-city":"./lower-pearl-city/lower-pearl-city.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
