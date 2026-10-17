// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"south-lawndale","repository":"america","path":"united-states/illinois/south-lawndale","depth":3,"parent":"united-states/illinois","children":["little-village"]});
export const childModules = Object.freeze({"little-village":"./little-village/little-village.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
